function getProducts(){
    return fetch("https://clippy4ever.myshopify.com/api/2023-04/graphql.json", {
        "headers": {
            "accept": "application/json, multipart/mixed",
            "accept-language": "en-GB,en-US;q=0.9,en;q=0.8",
            "content-type": "application/json",
            "sec-ch-ua": "\"Not.A/Brand\";v=\"8\", \"Chromium\";v=\"114\", \"Google Chrome\";v=\"114\"",
            "sec-ch-ua-mobile": "?0",
            "sec-ch-ua-platform": "\"macOS\"",
            "sec-fetch-dest": "empty",
            "sec-fetch-mode": "cors",
            "sec-fetch-site": "cross-site",
            "x-shopify-storefront-access-token": "68bee16e5b459a006e2e23da7091e455"
        },
        "referrer": "http://localhost:3000/",
        "referrerPolicy": "strict-origin-when-cross-origin",
        "body": "{\"query\":\"query {\\n  products(first: 5) {\\n    nodes {\\n      id\\n      title\\n      handle\\n      variants(first: 1) {\\n        edges {\\n          node {\\n            id\\n          }\\n        }\\n      }\\n    }\\n  }\\n}\",\"variables\":{\"input\":{\"lines\":{\"merchandiseId\":\"gid://shopify/Product/10480362782742\",\"quantity\":1}}}}",
        "method": "POST",
        "mode": "cors",
        "credentials": "omit"
    }).then((r) => r.json()).then((j) => {
        const prods = j.data.products.nodes;

        for(const p of prods){
            const variant = p.variants.edges[0].node.id;
            p.variant = variant;
        }

        return prods;
    });
}

getProducts().then((products) => {
    document.getElementById('productTitle').innerText = products[4].title;
    document.getElementById('buyNowButton').onclick = () => {
        fetch("https://clippy4ever.myshopify.com/api/2023-04/graphql.json", {
            "headers": {
                "accept": "application/json, multipart/mixed",
                "accept-language": "en-GB,en-US;q=0.9,en;q=0.8",
                "content-type": "application/json",
                "sec-ch-ua": "\"Not.A/Brand\";v=\"8\", \"Chromium\";v=\"114\", \"Google Chrome\";v=\"114\"",
                "sec-ch-ua-mobile": "?0",
                "sec-ch-ua-platform": "\"macOS\"",
                "sec-fetch-dest": "empty",
                "sec-fetch-mode": "cors",
                "sec-fetch-site": "cross-site",
                "x-shopify-storefront-access-token": "68bee16e5b459a006e2e23da7091e455"
            },
            "referrer": "http://localhost:3000/",
            "referrerPolicy": "strict-origin-when-cross-origin",
            "body": "{\"query\":\"mutation cartCreate {\\n  cartCreate(\\n    input: {\\n      lines: [\\n        {\\n          quantity: 1\\n          merchandiseId: \\\"" + products[4].variant + "\\\"\\n        }\\n      ]\\n    }\\n  ) {\\n    cart {\\n\\t\\t\\tcheckoutUrl\\n    }\\n    userErrors {\\n      field\\n      message\\n    }\\n  }\\n}\",\"variables\":{\"input\":{\"lines\":{\"merchandiseId\":\"gid://shopify/Product/10480362782742\",\"quantity\":1}}},\"operationName\":\"cartCreate\"}",
            "method": "POST",
            "mode": "cors",
            "credentials": "omit"
        }).then((r) => r.json()).then((j) => {
            const checkoutURL = j.data.cartCreate.cart.checkoutUrl;
            console.log(checkoutURL);
            alert(`Redirecting to checkout (${checkoutURL})`);
            window.location.href = checkoutURL;
        });
    };
})
