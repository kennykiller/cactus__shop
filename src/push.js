async function fillFB() {
    let arr = [
      {
        counter: 1,
        description:
          "Очень сухие цветы, вроде и цветы прикольные, а вроде и высохли",
        initialStock: 100,
        name: "Сухоцветы",
        popularity: 3,
        price: 300,
        stockLeft: 100,
        imgSrc: "sukho2.jpg", 
        carousel: {
          src1: {
            front: "sukho/1.jpg",
            back: "sukho/2.jpg"
          },
          src2: {
            front: "sukho/3.jpg",
            back: "sukho/4.jpg"
          },
          src3: {
            front: "sukho/5.jpg",
            back: "sukho/6.jpg"
          },
          src4: {
            front: "sukho/7.jpg",
            back: "sukho/8.jpg"
          },
          src5: {
            front: "sukho/9.jpg",
            back: "sukho/10.jpg"
          },
        }
      },
      {
        counter: 1,
        description:
          "Классические или необычная розы доступны у нас по низким ценам, мегапопулярны",
        initialStock: 100,
        name: "Розы",
        popularity: 5,
        price: 150,
        stockLeft: 100,
        imgSrc: "rose2.jpg",
        carousel: {
          src1: {
            front: "rose/1.jpg",
            back: "rose/2.jpg"
          },
          src2: {
            front: "rose/3.jpg",
            back: "rose/4.jpg"
          },
          src3: {
            front: "rose/5.jpg",
            back: "rose/6.jpg"
          },
          src4: {
            front: "rose/7.jpg",
            back: "rose/8.jpg"
          },
          src5: {
            front: "rose/9.jpg",
            back: "rose/10.jpg"
          },
        }
      },
      {
        counter: 1,
        description: "Альстромерии на любой вкус, дорого-богато",
        initialStock: 20,
        name: "Кустовые цветы",
        popularity: 4,
        price: 1300,
        stockLeft: 20,
        imgSrc: "kust3.jpg",
        carousel: {
          src1: {
            front: "extra/1.jpg",
            back: "extra/2.jpg"
          },
          src2: {
            front: "extra/3.jpg",
            back: "extra/4.jpg"
          },
          src3: {
            front: "extra/5.jpg",
            back: "extra/6.jpg"
          },
          src4: {
            front: "extra/7.jpg",
            back: "extra/8.jpg"
          },
          src5: {
            front: "extra/9.jpg",
            back: "extra/10.jpg"
          },
        }
      },
      {
        counter: 1,
        description: "Продаем цветы в горшках, очень популярны, новый тренд",
        initialStock: 13,
        name: "Горшечные цветы",
        popularity: 5,
        price: 3500,
        stockLeft: 13,
        imgSrc: "gorsh.jpg",
        carousel: {
          src1: {
            front: "sukho/1.jpg",
            back: "sukho/2.jpg"
          },
          src2: {
            front: "sukho/3.jpg",
            back: "sukho/4.jpg"
          },
          src3: {
            front: "sukho/5.jpg",
            back: "sukho/6.jpg"
          },
          src4: {
            front: "sukho/7.jpg",
            back: "sukho/8.jpg"
          },
          src5: {
            front: "sukho/9.jpg",
            back: "sukho/10.jpg"
          },
        }
      },
      {
        counter: 1,
        description:
          "Неважно, лето сейчас или зима, эти букеты всегда подарят яркое настроение",
        initialStock: 20,
        name: "Сезонные букеты",
        popularity: 5,
        price: 5600,
        stockLeft: 20,
        imgSrc: "seasons/1.jpg",
        carousel: {
          src1: {
            front: "seasons/1.jpg",
            back: "seasons/2.jpg"
          },
          src2: {
            front: "seasons/3.jpg",
            back: "seasons/4.jpg"
          },
          src3: {
            front: "seasons/5.jpg",
            back: "seasons/6.jpg"
          },
          src4: {
            front: "seasons/7.jpg",
            back: "seasons/8.jpg"
          },
          src5: {
            front: "seasons/9.jpg",
            back: "seasons/10.jpg"
          },
        }
      },
      {
        counter: 1,
        description: "Такое редко где увидишь",
        initialStock: 8,
        name: "Экзотика",
        popularity: 4,
        price: 10300,
        stockLeft: 8,
        imgSrc: "exotic/1.jpg",
        carousel: {
          src1: {
            front: "exotic/1.jpg",
            back: "exotic/2.jpg"
          },
          src2: {
            front: "exotic/3.jpg",
            back: "exotic/4.jpg"
          },
          src3: {
            front: "exotic/5.jpg",
            back: "exotic/6.jpg"
          },
          src4: {
            front: "exotic/7.jpg",
            back: "exotic/8.jpg"
          },
          src5: {
            front: "exotic/9.jpg",
            back: "exotic/10.jpg"
          },
        }
      },
      {
        counter: 1,
        description: "Плохим цветам такое красивое название бы не дали",
        initialStock: 35,
        name: "Альстромерии",
        popularity: 4,
        price: 370,
        stockLeft: 35,
        imgSrc: "alstromeria/1.jpg",
        carousel: {
          src1: {
            front: "alstromeria/1.jpg",
            back: "alstromeria/2.jpg"
          },
          src2: {
            front: "alstromeria/3.jpg",
            back: "alstromeria/4.jpg"
          },
          src3: {
            front: "alstromeria/5.jpg",
            back: "alstromeria/6.jpg"
          },
          src4: {
            front: "alstromeria/7.jpg",
            back: "alstromeria/8.jpg"
          },
          src5: {
            front: "alstromeria/9.jpg",
            back: "alstromeria/10.jpg"
          },
        }
      },
      {
        counter: 1,
        description:
          "Вы когда-нибудь летели через облака? - Это то же самое, что нести перед собой букет гипсофил",
        initialStock: 15,
        name: "Гипсофилы",
        popularity: 5,
        price: 1200,
        stockLeft: 15,
        imgSrc: "gipsofila/1.jpg",
        carousel: {
          src1: {
            front: "gipsofila/1.jpg",
            back: "gipsofila/2.jpg"
          },
          src2: {
            front: "gipsofila/3.jpg",
            back: "gipsofila/4.jpg"
          },
          src3: {
            front: "gipsofila/5.jpg",
            back: "gipsofila/6.jpg"
          },
          src4: {
            front: "gipsofila/7.jpg",
            back: "gipsofila/8.jpg"
          },
          src5: {
            front: "gipsofila/9.jpg",
            back: "gipsofila/10.jpg"
          },
        }
      },
      {
        counter: 1,
        description: "Классика - есть классика",
        initialStock: 60,
        name: "Гвоздики",
        popularity: 5,
        price: 200,
        stockLeft: 60,
        imgSrc: "gvozdiki/1.jpg",
        carousel: {
          src1: {
            front: "gvozdiki/1.jpg",
            back: "gvozdiki/2.jpg"
          },
          src2: {
            front: "gvozdiki/3.jpg",
            back: "gvozdiki/4.jpg"
          },
          src3: {
            front: "gvozdiki/5.jpg",
            back: "gvozdiki/6.jpg"
          },
          src4: {
            front: "gvozdiki/7.jpg",
            back: "gvozdiki/8.jpg"
          },
          src5: {
            front: "gvozdiki/9.jpg",
            back: "gvozdiki/10.jpg"
          },
        }
      },
      {
        counter: 1,
        description: "Этот запах дурманит",
        initialStock: 45,
        name: "Хризантема",
        popularity: 4,
        price: 270,
        stockLeft: 45,
        imgSrc: "khrisantema/1.jpg",
        carousel: {
          src1: {
            front: "khrisantema/1.jpg",
            back: "khrisantema/2.jpg"
          },
          src2: {
            front: "khrisantema/3.jpg",
            back: "khrisantema/4.jpg"
          },
          src3: {
            front: "khrisantema/5.jpg",
            back: "khrisantema/6.jpg"
          },
          src4: {
            front: "khrisantema/7.jpg",
            back: "khrisantema/8.jpg"
          },
          src5: {
            front: "khrisantema/9.jpg",
            back: "khrisantema/10.jpg"
          },
        }
      },
    ];
    for (let obj of arr) {
      const response = await fetch(
        "https://floristic-shop-default-rtdb.europe-west1.firebasedatabase.app/flowerBase.json",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(obj),
        }
      );
      const responseData = response.json();
      console.log(responseData);
    }
  }