const productsData = [
    {
      id: 101,
      name: "Laptop",
      price: 999.99,
      brand: "Dell",
      category: "Electronics",
      rating: 4.5,
    },
    {
      id: 102,
      name: "Smartphone",
      price: 599.99,
      brand: "Samsung",
      category: "Electronics",
      rating: 4.0,
    },
    {
      id: 103,
      name: "Running Shoes",
      price: 79.99,
      brand: "Nike",
      category: "Footwear",
      rating: 4.8,
    },
    {
      id: 104,
      name: "T-shirt",
      price: 19.99,
      brand: "Adidas",
      category: "Apparel",
      rating: 4.2,
    },
    {
      id: 105,
      name: "Coffee Maker",
      price: 49.99,
      brand: "Hamilton",
      category: "Kitchen Appliances",
      rating: 4.6,
    },
  ];

  function getMostExpensive() {
    let mostExpensive = productsData[0];
    for (let i = 1; i < productsData.length; i++) {
      if (productsData[i].price > mostExpensive.price) {
        mostExpensive = productsData[i];
      }
    }
    // console.log(mostExpensive);
    return mostExpensive;
  }
  function displayMostExpensive() {
    const mostExpensive = getMostExpensive();
    document.getElementById(
      "expensive-product"
    ).innerHTML = `<article><header>Most Expensive Product</header>
     <p><strong>Name:</strong> ${mostExpensive.name}</p>
     <p><strong>Price:</strong> ${mostExpensive.price}</p>
     <p><strong>Brand:</strong> ${mostExpensive.brand}</p>
     <p><strong>Category:</strong> ${mostExpensive.category}</p>
     <footer><p><strong>Rating:</strong> ${mostExpensive.rating}</p></footer>
     </article>`;
  }
  function calculateStats() {
    let totalElectronics = 0;
    let totalPrice = 0;
    let totalRating = 0;

    for (let i = 0; i < productsData.length; i++) {
      if (productsData[i].category === "Electronics") {
        totalElectronics++;
      }
      totalPrice += productsData[i].price;
      totalRating += productsData[i].rating;
    }
    // console.log(totalPrice, totalRating);
    return {
      totalElectronics,
      priceAvg: totalPrice / productsData.length,
      ratingAvg: totalRating / productsData.length,
    };
  }
  function displayStats() {
    const stats = calculateStats();
    document.getElementById(
      "total-average"
    ).innerHTML = `<article><header>Product Statistics</header>
     <p><strong>Total Electronics Products:</strong> ${stats.totalElectronics}</p>
     <p><strong>Average Price:</strong> ${stats.priceAvg}</p>
     <footer><p><strong> Average Rating:</strong> ${stats.ratingAvg}</p></footer>
     </article>`;
  }

  function getHighestRatedProduct() {
    let topRatedProduct = productsData[0];
    for (let i = 1; i < productsData.length; i++) {
      if (productsData[i].rating > topRatedProduct.rating)
        topRatedProduct = productsData[i];
    }
    return topRatedProduct;
  }
  function displaytopRatedProduct() {
    const highestRatedProduct = getHighestRatedProduct();
    document.getElementById(
      "highest-rated-product"
    ).innerHTML = `<article><header>Highest Rated Product</header>
     <p><strong>Name:</strong> ${highestRatedProduct.name}</p>
     <p><strong>Price:</strong> ${highestRatedProduct.price}</p>
     <p><strong>Brand:</strong> ${highestRatedProduct.brand}</p>
     <p><strong>Category:</strong> ${highestRatedProduct.category}</p>
     <footer><p><strong>Rating:</strong> ${highestRatedProduct.rating}</p></footer>
     </article>`;
  }

  function priceLessThan50() {
    let priceLessThan50 = [];
    for (let i = 0; i < productsData.length; i++) {
      if (productsData[i].price < 50) {
        priceLessThan50.push(productsData[i]);
      }
    }

    // console.log(priceLessThan50);
    return priceLessThan50;
  }

  // priceLessthan50();
  function displayPriceLessThan50Product() {
    const lessPrice = priceLessThan50();
    const priceLessthan50 = document.getElementById("price-less-than-50");
    if (!lessPrice) {
      priceLessthan50.innerHTML = "<p>No Product Found</p>";
      return;
    }

    let productHtml = "";

    for (let i = 0; i < lessPrice.length; i++) {
      const product = lessPrice[i];
      productHtml += `<article><header><strong>${product.name}</strong></header>
        <p><strong>Price:</strong> ${product.price}</p>
        <p><strong>Brand:</strong> ${product.brand}</p>
        <p><strong>Category:</strong> ${product.category}</p>
       <footer><p><strong>Rating:</strong> ${product.rating}</p></footer></article>`;
    }
    priceLessthan50.innerHTML = productHtml;
  }
  function generate() {
    displayMostExpensive();
    displayStats();
    displaytopRatedProduct();
    displayPriceLessThan50Product();
  }
  document.addEventListener("DOMContentLoaded", generate);