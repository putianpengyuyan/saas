const LOCAL_CONSTANTS = {
  shoppingCart: "shopping_cart",
  shoppingCartTotalNum: "shopping_cart_total_num",
  shoppingCartTotal: "shopping_cart-total",
};

class localStorageUtil {
  static setItem(key, value) {
    localStorage.setItem(key, value);
  }

  static getItem(key) {
    if (!localStorage.getItem(key)) {
      return 0;
    }
    return localStorage.getItem(key);
  }

  static addProductToShoppingCartLocal(product) {
    let productArr = [];
    let shoppingCartTotalNum = 0;
    let shoppingCartTotal = 0;

    if (this.getItem(LOCAL_CONSTANTS.shoppingCart)) {
      productArr = JSON.parse(this.getItem(LOCAL_CONSTANTS.shoppingCart));
    }
    if (this.getItem(LOCAL_CONSTANTS.shoppingCartTotal)) {
      shoppingCartTotal = parseFloat(
        this.getItem(LOCAL_CONSTANTS.shoppingCartTotal)
      );
    }
    if (this.getItem(LOCAL_CONSTANTS.shoppingCartTotalNum)) {
      shoppingCartTotalNum = parseFloat(
        this.getItem(LOCAL_CONSTANTS.shoppingCartTotalNum)
      );
    }
    let existProduct = false; //标记购物车中是否已有相同商品

    productArr.map((item) => {
      console.group("对比0--------------------");
      console.log(item);
      console.log(product);
      console.groupEnd("对比0--------------------");
      if (product.id === item.id) {
        if (product.skuData1.value === item.skuData1.value) {
          if (product.skuData2.value === item.skuData2.value) {
            console.log("直接相加-------");
            existProduct = true;
            item.num += product.num;
            console.log(typeof item.num);
            item.total += parseFloat(product.total);
            console.log(product.total);
            console.log(typeof product.total);
            item.total = parseFloat(item.total);
            console.log(typeof item.total);
          }
        }
      }
      return item;
    });
    console.log("1212121212121212121");
    shoppingCartTotalNum += product.num;
    console.log(typeof shoppingCartTotalNum);
    shoppingCartTotal += parseFloat(product.total);
    console.log(typeof shoppingCartTotal);
    if (existProduct === false) {
      console.log("新增------------");
      productArr.push(product);
    }
    console.log("============lalalalalala================");
    console.log(product.id);
    console.log(shoppingCartTotal);
    console.log(typeof shoppingCartTotal);
    console.log(typeof shoppingCartTotalNum);
    console.log(shoppingCartTotalNum);
    console.log(productArr);
    this.setItem(
      LOCAL_CONSTANTS.shoppingCartTotal,
      shoppingCartTotal.toFixed(2)
    );
    this.setItem(LOCAL_CONSTANTS.shoppingCartTotalNum, shoppingCartTotalNum);
    this.setItem(LOCAL_CONSTANTS.shoppingCart, JSON.stringify(productArr));
    const shoppingCartNumComArr = document.querySelectorAll(".products-num");
    for (let i = 0; i < shoppingCartNumComArr.length; i++) {
      shoppingCartNumComArr[i].innerText = shoppingCartTotalNum;
    }

    document.querySelector(
      ".price-title-total"
    ).innerHTML = `$${shoppingCartTotal.toFixed(2)}`;
  }

  // 整个删除
  static removeWholeProductFromShoppingCartLocal(id, color, size) {
    let productArr = [];
    let shoppingCartTotalNum = 0;
    let shoppingCartTotal = 0;

    if (this.getItem(LOCAL_CONSTANTS.shoppingCart)) {
      productArr = JSON.parse(this.getItem(LOCAL_CONSTANTS.shoppingCart));
    }
    if (this.getItem(LOCAL_CONSTANTS.shoppingCartTotal)) {
      shoppingCartTotal = parseFloat(
        this.getItem(LOCAL_CONSTANTS.shoppingCartTotal)
      );
    }
    if (this.getItem(LOCAL_CONSTANTS.shoppingCartTotalNum)) {
      shoppingCartTotalNum = parseInt(
        this.getItem(LOCAL_CONSTANTS.shoppingCartTotalNum)
      );
    } //标记购物车中是否已有相同商品

    let product = null;
    let deletedIndex = -1;
    console.group("传入的值------");
    console.log(id);
    console.log(color);
    console.log(typeof size);
    console.groupEnd("传入的值------");
    productArr.map((item, index) => {
      console.log(id == item.id);
      console.log(color == item.skuData1.value);
      console.log(size == item.skuData2.value);
      console.log(typeof size );
      console.log(typeof item.skuData2.value );
      console.log(item);
      if (
        id == item.id &&
        color == item.skuData1.value &&
        size == item.skuData2.value
      ) {
        console.log("找到了000000000000");
        deletedIndex = index;
        product = item;
        console.log(shoppingCartTotal);
        console.log(item.total);
        console.log(shoppingCartTotalNum);
        console.log(item.num);
        shoppingCartTotal -= parseFloat(item.total);
        shoppingCartTotalNum -= parseInt(item.num);
      }
    });
    if (deletedIndex >= 0) {
      productArr.splice(deletedIndex, 1);
      console.log(productArr);
      this.setItem(
        LOCAL_CONSTANTS.shoppingCartTotal,
        shoppingCartTotal.toFixed(2)
      );
      this.setItem(LOCAL_CONSTANTS.shoppingCartTotalNum, shoppingCartTotalNum);
      this.setItem(LOCAL_CONSTANTS.shoppingCart, JSON.stringify(productArr));
      const TableBodyS = document.querySelectorAll(".table-body");
      console.log(11111);
      console.log(TableBodyS);
      for (let i = 0; i < TableBodyS.length; i++) {
        const TableBody = TableBodyS[i];
        TableBody.children[deletedIndex] &&
          TableBody.children[deletedIndex].remove();
      }

      const container1 = document.querySelector(".container1");
      const container2 = document.querySelector(".container2");
      if (shoppingCartTotalNum == 0) {
        if (container1 || container2) {
          container2.style.display = "none";
          container1.style.display = "block";
        }
        document.querySelector(".price-title-total").innerHTML = `$0`;
        const productNumS = document.querySelectorAll(".products-num");
        for (let i = 0; i < productNumS.length; i++) {
          const productNum = productNumS[i];
          productNum.innerText = shoppingCartTotalNum;
        }
        // document.querySelector('.price-total').innerText = ""
        // document.querySelector(".container2").style.display='none'
        // document.querySelector(".container1").style.display='block'
      }
    }
    this.setItem(
      LOCAL_CONSTANTS.shoppingCartTotal,
      shoppingCartTotal.toFixed(2)
    );
    this.setItem(LOCAL_CONSTANTS.shoppingCartTotalNum, shoppingCartTotalNum);
    this.setItem(LOCAL_CONSTANTS.shoppingCart, JSON.stringify(productArr));
    document.querySelectorAll(".c-total-item").innerHTML = "";
    console.log(3333333333333);
    console.log(document.querySelector(".products-num"));
    // document.querySelector(".products-num").innerText=shoppingCartTotalNum
    const productNumS = document.querySelectorAll(".products-num");
    for (let i = 0; i < productNumS.length; i++) {
      const productNum = productNumS[i];
      productNum.innerText = shoppingCartTotalNum;
    }
    document.querySelector(".price-title-total").innerText =
      shoppingCartTotal.toFixed(2);
  }

  // 只减数量
  static removeProductNumFromShoppingCartLocal(id, color, size, type = 0) {
    let productArr = [];
    let shoppingCartTotalNum = 0;
    let shoppingCartTotal = 0;

    if (this.getItem(LOCAL_CONSTANTS.shoppingCart)) {
      productArr = JSON.parse(this.getItem(LOCAL_CONSTANTS.shoppingCart));
    }
    if (this.getItem(LOCAL_CONSTANTS.shoppingCartTotal)) {
      shoppingCartTotal = parseFloat(
        this.getItem(LOCAL_CONSTANTS.shoppingCartTotal)
      );
    }
    if (this.getItem(LOCAL_CONSTANTS.shoppingCartTotalNum)) {
      shoppingCartTotalNum = parseFloat(
        this.getItem(LOCAL_CONSTANTS.shoppingCartTotalNum)
      );
    }
    console.log("= = = = =  = = = =");

    // console.log(product);
    // console.log(product.num);
    // console.log(product.total);
    // shoppingCartTotalNum -= product.num;
    // shoppingCartTotal -= parseFloat(product.total);
    // productArr.map((item) => {
    //   if (id == item.id && color == item.color && size == item.size){
    //     product = item;
    //     console.log(product);
    //   }
    //   console.group("对比1--------------------");
    //   console.log(item);
    //   console.log(product);
    //   console.groupEnd("对比1--------------------");
    //   // if (product.id === item.id) {
    //   //   if (product.color === item.color) {
    //   //     if (product.size === item.size) {
    //   //       console.log("直接相减-------");
    //   //       // item.num -= product.num;
    //   //       // item.total -= product.total;
    //   //     }
    //   //   }
    //   //   return item;
    //   // }
    // });
    let index1 = 0;
    console.log(color);
    console.log(size);
    console.log(typeof size);

    productArr.map((item, index) => {
      console.log(item);
      // console.log(id == item.id);
      // console.log((color + '') == item.skuData1.value);
      // console.log((size + '') == item.skuData2.value);
      // console.log(typeof size );
      // console.log(typeof item.skuData2.value );
      if (
        id == item.id &&
        color == item.skuData1.value &&
        size == item.skuData2.value
      ) {
        console.log("找到了1111111111111");
        // deletedIndex = index;
        product === item;
        console.log("======typeof======");
        console.log(shoppingCartTotal);
        console.log(typeof shoppingCartTotal);
        console.log(item.total);
        // item.total= parseFloat(item.total)
        console.log(typeof item.total);
        console.log(item.total);
        console.log(shoppingCartTotalNum);
        console.log(item.num);
        // shoppingCartTotal -= parseFloat(item.total);
        // shoppingCartTotalNum -= parseInt(item.num);
        console.log("直接相减-------");
        if (type) {
          item.num++;
          item.total = parseFloat(item.price * item.num).toFixed(2);
          // item.total = parseFloat(item.total)
          shoppingCartTotal += parseFloat(item.price);
          shoppingCartTotal = shoppingCartTotal.toFixed(2);
          shoppingCartTotalNum++;
        } else {
          item.num--;
          if (item.num === 0) {
            item.num = 1;
            item.total = parseFloat(item.price).toFixed(2);
            return;
          }
          item.total = parseFloat(item.total - item.price).toFixed(2);
          shoppingCartTotal -= parseFloat(item.price);
          shoppingCartTotal = shoppingCartTotal.toFixed(2);
          shoppingCartTotalNum--;
        }

        index1 = index;
      }
    });

    console.log(shoppingCartTotal);
    console.log(shoppingCartTotalNum);
    console.log(productArr);
    this.setItem(LOCAL_CONSTANTS.shoppingCartTotal, shoppingCartTotal);
    this.setItem(LOCAL_CONSTANTS.shoppingCartTotalNum, shoppingCartTotalNum);
    this.setItem(LOCAL_CONSTANTS.shoppingCart, JSON.stringify(productArr));
    // document.querySelector(".products-num").innerHTML=shoppingCartTotalNum
    const productNumS = document.querySelectorAll(".products-num");
    for (let i = 0; i < productNumS.length; i++) {
      const productNum = productNumS[i];
      productNum.innerText = shoppingCartTotalNum;
    }
    document.querySelectorAll(".c-input")[index1].innerHTML =
      productArr[index1].num;
    const totals = document.querySelectorAll(".c-total-item");
    console.log(totals);
    if (totals.length) {
      for (let i = 0; i < totals.length; i++) {
        if (i == index1) {
          totals[i].innerHTML = `$${productArr[index1].total}`;
        }
      }
    }
    document.querySelector(
      ".price-title-total"
    ).innerHTML = `$${shoppingCartTotal}`;
  }

  static getProductArr() {
    return this.getItem(LOCAL_CONSTANTS.shoppingCart);
  }

  static addShoppingCartTotalNum(num) {
    let totalNum =
      parseInt(this.getItem(LOCAL_CONSTANTS.shoppingCartTotalNum)) + num;
    this.setItem(LOCAL_CONSTANTS.shoppingCartTotalNum, totalNum);
  }

  static getShoppingCartTotalNum(num) {
    num = this.getItem(LOCAL_CONSTANTS.shoppingCartTotalNum);
    if (!num) {
      num = 0;
    }
    return parseInt(num);
  }

  static addShoppingCartTotal(total) {
    let totals =
      parseFloat(this.getItem(LOCAL_CONSTANTS.shoppingCartTotal)) + total;
    this.setItem(LOCAL_CONSTANTS.shoppingCartTotal, totals);
  }

  static getShoppingCartTotal(total) {
    return parseFloat(this.getItem(LOCAL_CONSTANTS.shoppingCartTotal));
  }
}
