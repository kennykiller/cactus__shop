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
        imgSrc: "sukho/1.jpg", 
        carousel: {
          src1: {
            front: "sukho/1.jpg",
            back: "sukho/2.jpg",
            counter: 1,
            description: "Букет Очарование",
            price: 1800,
            initialStock: 50,
            stockLeft: 50
          },
          src2: {
            front: "sukho/3.jpg",
            back: "sukho/4.jpg",
            counter: 1,
            description: "Букет Признание",
            price: 2800,
            initialStock: 30,
            stockLeft: 30
          },
          src3: {
            front: "sukho/5.jpg",
            back: "sukho/6.jpg",
            counter: 1,
            description: "Букет Лирика",
            price: 2000,
            initialStock: 25,
            stockLeft: 25
          },
          src4: {
            front: "sukho/7.jpg",
            back: "sukho/8.jpg",
            counter: 1,
            description: "Букет Французская весна",
            price: 6100,
            initialStock: 15,
            stockLeft: 15
          },
          src5: {
            front: "sukho/9.jpg",
            back: "sukho/10.jpg",
            counter: 1,
            description: "Букет Встреча",
            price: 6100,
            initialStock: 13,
            stockLeft: 13
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
        imgSrc: "rose/1.jpg",
        carousel: {
          src1: {
            front: "roses/1.jpg",
            back: "roses/2.jpg",
            counter: 1,
            description: "Букет Яркий Комплимент",
            price: 2250,
            initialStock: 30,
            stockLeft: 30
          },
          src2: {
            front: "roses/3.jpg",
            back: "roses/4.jpg",
            counter: 1,
            description: "Букет Комильфо",
            price: 4900,
            initialStock: 23,
            stockLeft: 23
          },
          src3: {
            front: "roses/5.jpg",
            back: "roses/6.jpg",
            counter: 1,
            description: "Букет Сиреневая Мечта",
            price: 5650,
            initialStock: 20,
            stockLeft: 20
          },
          src4: {
            front: "roses/7.jpg",
            back: "roses/8.jpg",
            counter: 1,
            description: "Букет Танцуй",
            price: 6850,
            initialStock: 18,
            stockLeft: 18
          },
          src5: {
            front: "roses/9.jpg",
            back: "roses/10.jpg",
            counter: 1,
            description: "Крем де ля Крем",
            price: 3900,
            initialStock: 25,
            stockLeft: 25
          },
          src6: {
            front: "roses/11.jpg",
            back: "roses/12.jpg",
            counter: 1,
            description: "Акварель",
            price: 4160,
            initialStock: 19,
            stockLeft: 19
          },
          src7: {
            front: "roses/13.jpg",
            back: "roses/14.jpg",
            counter: 1,
            description: "Капучино",
            price: 4600,
            initialStock: 31,
            stockLeft: 31
          },
          src8: {
            front: "roses/15.jpg",
            back: "roses/16.jpg",
            counter: 1,
            description: "Для самой любимой",
            price: 10400,
            initialStock: 8,
            stockLeft: 8
          },
          src9: {
            front: "roses/17.jpg",
            back: "roses/18.jpg",
            counter: 1,
            description: "Луиза",
            price: 2250,
            initialStock: 12,
            stockLeft: 12
          },
          srс10: {
            front: "roses/19.jpg",
            back: "roses/20.jpg",
            counter: 1,
            description: "Крем де ля Крем",
            price: 6150,
            initialStock: 22,
            stockLeft: 22
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
            back: "seasons/2.jpg",
            counter: 1,
            description: "Букет Летняя Роскошь",
            price: 4400,
            initialStock: 22,
            stockLeft: 22
          },
          src2: {
            front: "seasons/3.jpg",
            back: "seasons/4.jpg",
            counter: 1,
            description: "Букет Солнечный день",
            price: 2800,
            initialStock: 22,
            stockLeft: 22
          },
          src3: {
            front: "seasons/5.jpg",
            back: "seasons/6.jpg",
            counter: 1,
            description: "Букет Незабываемый",
            price: 5600,
            initialStock: 22,
            stockLeft: 22
          },
          src4: {
            front: "seasons/7.jpg",
            back: "seasons/8.jpg",
            counter: 1,
            description: "Букет Полевая свежесть",
            price: 3100,
            initialStock: 32,
            stockLeft: 32
          },
          src5: {
            front: "seasons/9.jpg",
            back: "seasons/10.jpg",
            counter: 1,
            description: "Букет Светлый",
            price: 2300,
            initialStock: 42,
            stockLeft: 42
          },
          src6: {
            front: "seasons/11.jpg",
            back: "seasons/12.jpg",
            counter: 1,
            description: "Букет Пионы в моде",
            price: 2850,
            initialStock: 12,
            stockLeft: 12
          },
          src7: {
            front: "seasons/13.jpg",
            back: "seasons/14.jpg",
            counter: 1,
            description: "Букет Луговой",
            price: 2150,
            initialStock: 10,
            stockLeft: 10
          },
          src8: {
            front: "seasons/15.jpg",
            back: "seasons/16.jpg",
            counter: 1,
            description: "Букет Морская даль",
            price: 4800,
            initialStock: 8,
            stockLeft: 8
          },
          src9: {
            front: "seasons/9.jpg",
            back: "seasons/10.jpg",
            counter: 1,
            description: "Букет Джентельмен",
            price: 1920,
            initialStock: 12,
            stockLeft: 12
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
            back: "exotic/2.jpg",
            counter: 1,
            description: "Букет Коралловый риф",
            price: 3100,
            initialStock: 12,
            stockLeft: 12
          },
          src2: {
            front: "exotic/3.jpg",
            back: "exotic/4.jpg",
            counter: 1,
            description: "Букет Русская зима",
            price: 2700,
            initialStock: 11,
            stockLeft: 11
          },
          src3: {
            front: "exotic/5.jpg",
            back: "exotic/6.jpg",
            counter: 1,
            description: "Букет нежных лютиков",
            price: 3900,
            initialStock: 22,
            stockLeft: 22
          },
          src4: {
            front: "exotic/7.jpg",
            back: "exotic/8.jpg",
            counter: 1,
            description: "Букет Лесная сказка",
            price: 2600,
            initialStock: 12,
            stockLeft: 12
          },
          src5: {
            front: "exotic/9.jpg",
            back: "exotic/10.jpg",
            counter: 1,
            description: "Букет Итальянская страсть",
            price: 5400,
            initialStock: 34,
            stockLeft: 34
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
            back: "alstromeria/2.jpg",
            counter: 1,
            description: "Букет Альстромерии в розовом",
            price: 1900,
            initialStock: 21,
            stockLeft: 21
          },
          src2: {
            front: "alstromeria/3.jpg",
            back: "alstromeria/4.jpg",
            counter: 1,
            description: "Букет Альстромерии в Крафте",
            price: 2000,
            initialStock: 12,
            stockLeft: 12
          },
          src3: {
            front: "alstromeria/5.jpg",
            back: "alstromeria/6.jpg",
            counter: 1,
            description: "Букет Летнее настроение",
            price: 2000,
            initialStock: 5,
            stockLeft: 5
          },
          src4: {
            front: "alstromeria/7.jpg",
            back: "alstromeria/8.jpg",
            counter: 1,
            description: "Букет Семицветик",
            price: 3650,
            initialStock: 17,
            stockLeft: 17
          },
          src5: {
            front: "alstromeria/9.jpg",
            back: "alstromeria/10.jpg",
            counter: 1,
            description: "Букет Колорит",
            price: 2500,
            initialStock: 32,
            stockLeft: 32
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
            back: "gipsofila/2.jpg",
            counter: 1,
            description: "Букет Яркость",
            price: 2800,
            initialStock: 32,
            stockLeft: 32
          },
          src2: {
            front: "gipsofila/3.jpg",
            back: "gipsofila/4.jpg",
            counter: 1,
            description: "Букет синее Облако",
            price: 2610,
            initialStock: 13,
            stockLeft: 13
          },
          src3: {
            front: "gipsofila/5.jpg",
            back: "gipsofila/6.jpg",
            counter: 1,
            description: "Букет Простота",
            price: 2800,
            initialStock: 15,
            stockLeft: 15
          },
          src4: {
            front: "gipsofila/7.jpg",
            back: "gipsofila/8.jpg",
            counter: 1,
            description: "Букет Райские бабочки",
            price: 2500,
            initialStock: 17,
            stockLeft: 17
          },
          src5: {
            front: "gipsofila/9.jpg",
            back: "gipsofila/10.jpg",
            counter: 1,
            description: "Букет Индиго",
            price: 2070,
            initialStock: 2,
            stockLeft: 2
          },
          src6: {
            front: "gipsofila/11.jpg",
            back: "gipsofila/12.jpg",
            counter: 1,
            description: "Букет Корзинка фиолета",
            price: 3510,
            initialStock: 16,
            stockLeft: 16
          },
          src7: {
            front: "gipsofila/13.jpg",
            back: "gipsofila/14.jpg",
            counter: 1,
            description: "Букет Джентельмен",
            price: 3600,
            initialStock: 13,
            stockLeft: 13
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
            back: "gvozdiki/2.jpg",
            counter: 1,
            description: "Букет Сиреневый Крем",
            price: 1650,
            initialStock: 7,
            stockLeft: 7
          },
          src2: {
            front: "gvozdiki/3.jpg",
            back: "gvozdiki/4.jpg",
            counter: 1,
            description: "Букет Вальс Цветов",
            price: 3500,
            initialStock: 13,
            stockLeft: 13
          },
          src3: {
            front: "gvozdiki/5.jpg",
            back: "gvozdiki/6.jpg",
            counter: 1,
            description: "Букет Фиолетовые Мечты",
            price: 5000,
            initialStock: 11,
            stockLeft: 11
          },
          src4: {
            front: "gvozdiki/7.jpg",
            back: "gvozdiki/8.jpg",
            counter: 1,
            description: "Букет Экзотические гвоздики",
            price: 1530,
            initialStock: 8,
            stockLeft: 8
          },
          src5: {
            front: "gvozdiki/9.jpg",
            back: "gvozdiki/10.jpg",
            counter: 1,
            description: "Букет Лунный",
            price: 3100,
            initialStock: 6,
            stockLeft: 6
          },
          src6: {
            front: "gvozdiki/11.jpg",
            back: "gvozdiki/12.jpg",
            counter: 1,
            description: "Букет Весенний",
            price: 3400,
            initialStock: 31,
            stockLeft: 31
          }
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
            back: "khrisantema/2.jpg",
            counter: 1,
            description: "Буря эмоций",
            price: 3100,
            initialStock: 17,
            stockLeft: 17
          },
          src2: {
            front: "khrisantema/3.jpg",
            back: "khrisantema/4.jpg",
            counter: 1,
            description: "Букет Осенний Вальс",
            price: 1850,
            initialStock: 9,
            stockLeft: 9
          },
          src3: {
            front: "khrisantema/5.jpg",
            back: "khrisantema/6.jpg",
            counter: 1,
            description: "Букет Яркий День",
            price: 1320,
            initialStock: 13,
            stockLeft: 13
          },
          src4: {
            front: "khrisantema/7.jpg",
            back: "khrisantema/8.jpg",
            counter: 1,
            description: "Букет Ассоль",
            price: 2750,
            initialStock: 21,
            stockLeft: 21
          },
          src5: {
            front: "khrisantema/9.jpg",
            back: "khrisantema/10.jpg",
            counter: 1,
            description: "Букет Шарм",
            price: 4400,
            initialStock: 32,
            stockLeft: 32
          },
          src6: {
            front: "khrisantema/11.jpg",
            back: "khrisantema/12.jpg",
            counter: 1,
            description: "Букет Сиреневое настроение",
            price: 2300,
            initialStock: 12,
            stockLeft: 12
          },
          src7: {
            front: "khrisantema/13.jpg",
            back: "khrisantema/14.jpg",
            counter: 1,
            description: "Букет Зефир",
            price: 3600,
            initialStock: 11,
            stockLeft: 11
          },
        }
      },
      {
        counter: 1,
        description: "Этот запах дурманит",
        initialStock: 45,
        name: "Флорариумы",
        popularity: 4,
        price: 270,
        stockLeft: 45,
        imgSrc: "florarium/1.jpg",
        carousel: {
          src1: {
            front: "florarium/1.jpg",
            back: "florarium/2.jpg",
            counter: 1,
            description: "Эхеверия в зеленом песке",
            price: 1590,
            initialStock: 10,
            stockLeft: 10
          },
          src2: {
            front: "florarium/3.jpg",
            back: "florarium/4.jpg",
            counter: 1,
            description: "Эхеверия в разноцветном песке",
            price: 1590,
            initialStock: 9,
            stockLeft: 9
          },
          src3: {
            front: "florarium/5.jpg",
            back: "florarium/6.jpg",
            counter: 1,
            description: "Эхеверия в бежевом камне",
            price: 1590,
            initialStock: 13,
            stockLeft: 13
          },
          src4: {
            front: "florarium/7.jpg",
            back: "florarium/8.jpg",
            counter: 1,
            description: "Эхеверия в оранжевом песке",
            price: 1590,
            initialStock: 21,
            stockLeft: 21
          },
          src5: {
            front: "florarium/9.jpg",
            back: "florarium/10.jpg",
            counter: 1,
            description: "Эхеверия в фиолетовом песке",
            price: 1590,
            initialStock: 32,
            stockLeft: 32
          },
        }
      }
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