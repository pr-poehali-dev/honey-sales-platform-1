import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";

const Index = () => {
  const products = [
    {
      id: 1,
      name: "Мед різнотравний",
      description: "Натуральний мед з польових квітів",
      price: "350 грн",
      volume: "500г",
      image: "/img/2e2301b3-e5a0-41c7-a984-ba225d476a94.jpg"
    },
    {
      id: 2,
      name: "Мед акацієвий",
      description: "Світлий делікатесний мед",
      price: "420 грн",
      volume: "500г",
      image: "/img/a04d809b-1782-47c2-9a84-98e5296f0804.jpg"
    },
    {
      id: 3,
      name: "Мед гречаний",
      description: "Темний мед з насиченим смаком",
      price: "380 грн",
      volume: "500г",
      image: "/img/2e2301b3-e5a0-41c7-a984-ba225d476a94.jpg"
    }
  ];

  const reviews = [
    {
      name: "Анна К.",
      text: "Прекрасний мед! Купую вже втретє.",
      rating: 5
    },
    {
      name: "Дмитро М.",
      text: "Якість відмінна, доставка швидка.",
      rating: 5
    },
    {
      name: "Ольга В.",
      text: "Справжній фермерський мед, дуже задоволена!",
      rating: 5
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-50 via-orange-50 to-yellow-50">
      {/* Header */}
      <header className="bg-gradient-to-r from-amber-100 to-orange-100 shadow-lg border-b-4 border-amber-600">
        <div className="container mx-auto px-4 py-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="bg-amber-600 p-3 rounded-full">
                <Icon name="Flower2" className="w-8 h-8 text-white" />
              </div>
              <div>
                <h1 className="text-3xl font-bold text-amber-900 font-serif">Добрі бджоли</h1>
                <p className="text-amber-700 font-medium">Натуральні продукти бджільництва</p>
              </div>
            </div>
            <nav className="hidden md:flex space-x-8">
              <a href="#catalog" className="text-amber-800 hover:text-amber-600 transition-colors font-semibold">Каталог</a>
              <a href="#about" className="text-amber-800 hover:text-amber-600 transition-colors font-semibold">Про ферму</a>
              <a href="#delivery" className="text-amber-800 hover:text-amber-600 transition-colors font-semibold">Доставка</a>
              <a href="#contacts" className="text-amber-800 hover:text-amber-600 transition-colors font-semibold">Контакти</a>
            </nav>
            <Button className="flex items-center space-x-2 bg-amber-600 hover:bg-amber-700 shadow-lg">
              <Icon name="ShoppingBasket" size={20} />
              <span className="font-semibold">Кошик</span>
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 lg:py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-amber-100 via-orange-100 to-yellow-100"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="inline-flex items-center bg-amber-200 text-amber-800 px-4 py-2 rounded-full mb-6 font-semibold">
                <Icon name="Award" className="w-5 h-5 mr-2" />
                100% натуральний продукт
              </div>
              <h2 className="text-5xl lg:text-7xl font-bold text-amber-900 mb-8 font-serif leading-tight">
                Справжній український мед
              </h2>
              <p className="text-xl text-amber-800 mb-10 leading-relaxed">
                Пасіка "Добрі бджоли" пропонує якісні продукти бджільництва. 
                Мед збирається з екологічно чистих угідь України за традиційними методами.
              </p>
              <div className="flex flex-col sm:flex-row gap-6">
                <Button size="lg" className="text-lg bg-amber-600 hover:bg-amber-700 shadow-xl px-8 py-4">
                  <Icon name="Eye" className="mr-2" />
                  Переглянути каталог
                </Button>
                <Button variant="outline" size="lg" className="text-lg border-2 border-amber-600 text-amber-800 hover:bg-amber-50 px-8 py-4">
                  <Icon name="Heart" className="mr-2" />
                  Дізнатися більше
                </Button>
              </div>
            </div>
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-amber-400 to-orange-400 rounded-3xl opacity-20 blur"></div>
              <img 
                src="/img/55e03054-a65f-418e-ac70-aa5a1e2db668.jpg" 
                alt="Пасіка" 
                className="rounded-3xl shadow-2xl w-full h-[600px] object-cover relative z-10 border-8 border-white"
              />
              <div className="absolute -bottom-8 -left-8 bg-white p-8 rounded-2xl shadow-2xl border-4 border-amber-200 z-20">
                <div className="flex items-center space-x-4">
                  <div className="bg-amber-100 p-4 rounded-full">
                    <Icon name="Leaf" className="text-amber-600 w-8 h-8" />
                  </div>
                  <div>
                    <p className="font-bold text-amber-900 text-lg">Екологічно чисто</p>
                    <p className="text-amber-700">Без хімікатів</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Products Catalog */}
      <section id="catalog" className="py-20 bg-gradient-to-b from-white to-amber-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <div className="inline-flex items-center bg-amber-200 text-amber-800 px-4 py-2 rounded-full mb-6 font-semibold">
              <Icon name="Sparkles" className="w-5 h-5 mr-2" />
              Наші продукти
            </div>
            <h3 className="text-4xl font-bold text-amber-900 mb-6 font-serif">Популярні сорти меду</h3>
            <p className="text-xl text-amber-700 max-w-2xl mx-auto">Оберіть свій улюблений смак з нашої колекції натурального українського меду</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
            {products.map((product) => (
              <Card key={product.id} className="group hover:shadow-2xl transition-all duration-500 bg-white border-4 border-amber-200 hover:border-amber-400 rounded-2xl overflow-hidden">
                <CardHeader className="p-0 relative">
                  <img 
                    src={product.image} 
                    alt={product.name}
                    className="w-full h-72 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute top-4 right-4">
                    <Badge className="bg-amber-600 text-white text-sm px-3 py-1 font-semibold">{product.volume}</Badge>
                  </div>
                </CardHeader>
                <CardContent className="p-8">
                  <CardTitle className="text-2xl mb-3 text-amber-900 font-serif">{product.name}</CardTitle>
                  <CardDescription className="mb-6 text-amber-700 text-lg">{product.description}</CardDescription>
                  <div className="flex items-center justify-between">
                    <p className="text-3xl font-bold text-amber-800">{product.price}</p>
                    <div className="flex space-x-1">
                      {[...Array(5)].map((_, i) => (
                        <Icon key={i} name="Star" className="w-5 h-5 text-yellow-400 fill-current" />
                      ))}
                    </div>
                  </div>
                </CardContent>
                <CardFooter className="p-8 pt-0">
                  <Button className="w-full text-lg bg-amber-600 hover:bg-amber-700 shadow-lg py-3">
                    <Icon name="ShoppingBasket" className="mr-2" size={20} />
                    У кошик
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-gradient-to-r from-amber-100 via-orange-100 to-yellow-100">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="inline-flex items-center bg-amber-200 text-amber-800 px-4 py-2 rounded-full mb-6 font-semibold">
                <Icon name="Home" className="w-5 h-5 mr-2" />
                Наша історія
              </div>
              <h3 className="text-4xl font-bold text-amber-900 mb-8 font-serif">Про нашу пасіку</h3>
              <p className="text-xl text-amber-800 mb-8 leading-relaxed">
                Пасіка "Добрі бджоли" працює вже понад 15 років. Ми дотримуємося традиційних 
                методів бджільництва та дбаємо про якість нашої продукції за старими українськими рецептами.
              </p>
              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="bg-amber-600 p-2 rounded-full">
                    <Icon name="CheckCircle" className="text-white w-6 h-6" />
                  </div>
                  <span className="text-lg text-amber-800 font-semibold">Екологічно чисті угіддя</span>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="bg-amber-600 p-2 rounded-full">
                    <Icon name="CheckCircle" className="text-white w-6 h-6" />
                  </div>
                  <span className="text-lg text-amber-800 font-semibold">Традиційні методи</span>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="bg-amber-600 p-2 rounded-full">
                    <Icon name="CheckCircle" className="text-white w-6 h-6" />
                  </div>
                  <span className="text-lg text-amber-800 font-semibold">Контроль якості</span>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-6">
              <div className="bg-white p-8 rounded-2xl text-center shadow-xl border-4 border-amber-200">
                <div className="bg-amber-100 p-4 rounded-full w-fit mx-auto mb-4">
                  <Icon name="Calendar" className="w-12 h-12 text-amber-600" />
                </div>
                <p className="text-3xl font-bold text-amber-900">15+</p>
                <p className="text-amber-700 font-semibold">років досвіду</p>
              </div>
              <div className="bg-white p-8 rounded-2xl text-center shadow-xl border-4 border-amber-200">
                <div className="bg-amber-100 p-4 rounded-full w-fit mx-auto mb-4">
                  <Icon name="Users" className="w-12 h-12 text-amber-600" />
                </div>
                <p className="text-3xl font-bold text-amber-900">1000+</p>
                <p className="text-amber-700 font-semibold">покупців</p>
              </div>
              <div className="bg-white p-8 rounded-2xl text-center shadow-xl border-4 border-amber-200">
                <div className="bg-amber-100 p-4 rounded-full w-fit mx-auto mb-4">
                  <Icon name="Flower2" className="w-12 h-12 text-amber-600" />
                </div>
                <p className="text-3xl font-bold text-amber-900">50+</p>
                <p className="text-amber-700 font-semibold">вуликів</p>
              </div>
              <div className="bg-white p-8 rounded-2xl text-center shadow-xl border-4 border-amber-200">
                <div className="bg-amber-100 p-4 rounded-full w-fit mx-auto mb-4">
                  <Icon name="Award" className="w-12 h-12 text-amber-600" />
                </div>
                <p className="text-3xl font-bold text-amber-900">100%</p>
                <p className="text-amber-700 font-semibold">натурально</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Reviews Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <div className="inline-flex items-center bg-amber-200 text-amber-800 px-4 py-2 rounded-full mb-6 font-semibold">
              <Icon name="MessageCircle" className="w-5 h-5 mr-2" />
              Відгуки
            </div>
            <h3 className="text-4xl font-bold text-amber-900 mb-6 font-serif">Що кажуть наші клієнти</h3>
            <p className="text-xl text-amber-700">Щирі відгуки від тих, хто вже скуштував наш мед</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-10">
            {reviews.map((review, index) => (
              <Card key={index} className="bg-gradient-to-br from-amber-50 to-orange-50 border-4 border-amber-200 rounded-2xl shadow-xl">
                <CardContent className="p-8">
                  <div className="flex mb-6">
                    {[...Array(review.rating)].map((_, i) => (
                      <Icon key={i} name="Star" className="w-6 h-6 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-amber-800 mb-6 text-lg italic">"{review.text}"</p>
                  <div className="flex items-center space-x-3">
                    <div className="bg-amber-600 p-2 rounded-full">
                      <Icon name="User" className="w-6 h-6 text-white" />
                    </div>
                    <p className="font-bold text-amber-900 text-lg">{review.name}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Delivery & Payment */}
      <section id="delivery" className="py-20 bg-gradient-to-r from-amber-100 via-orange-100 to-yellow-100">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <div className="inline-flex items-center bg-amber-200 text-amber-800 px-4 py-2 rounded-full mb-6 font-semibold">
              <Icon name="Package" className="w-5 h-5 mr-2" />
              Доставка
            </div>
            <h3 className="text-4xl font-bold text-amber-900 mb-6 font-serif">Доставка та оплата</h3>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center bg-white p-8 rounded-2xl shadow-xl border-4 border-amber-200">
              <div className="bg-amber-100 p-4 rounded-full w-fit mx-auto mb-6">
                <Icon name="Truck" className="w-12 h-12 text-amber-600" />
              </div>
              <h4 className="font-bold mb-3 text-amber-900 text-xl">Швидка доставка</h4>
              <p className="text-amber-700 font-semibold">По Україні 1-3 дні</p>
            </div>
            <div className="text-center bg-white p-8 rounded-2xl shadow-xl border-4 border-amber-200">
              <div className="bg-amber-100 p-4 rounded-full w-fit mx-auto mb-6">
                <Icon name="CreditCard" className="w-12 h-12 text-amber-600" />
              </div>
              <h4 className="font-bold mb-3 text-amber-900 text-xl">Зручна оплата</h4>
              <p className="text-amber-700 font-semibold">Карта або готівка</p>
            </div>
            <div className="text-center bg-white p-8 rounded-2xl shadow-xl border-4 border-amber-200">
              <div className="bg-amber-100 p-4 rounded-full w-fit mx-auto mb-6">
                <Icon name="Shield" className="w-12 h-12 text-amber-600" />
              </div>
              <h4 className="font-bold mb-3 text-amber-900 text-xl">Гарантія якості</h4>
              <p className="text-amber-700 font-semibold">100% натуральний продукт</p>
            </div>
            <div className="text-center bg-white p-8 rounded-2xl shadow-xl border-4 border-amber-200">
              <div className="bg-amber-100 p-4 rounded-full w-fit mx-auto mb-6">
                <Icon name="Headphones" className="w-12 h-12 text-amber-600" />
              </div>
              <h4 className="font-bold mb-3 text-amber-900 text-xl">Підтримка</h4>
              <p className="text-amber-700 font-semibold">Консультації 24/7</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contacts" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <div className="inline-flex items-center bg-amber-200 text-amber-800 px-4 py-2 rounded-full mb-6 font-semibold">
              <Icon name="Phone" className="w-5 h-5 mr-2" />
              Зв'язок
            </div>
            <h3 className="text-4xl font-bold text-amber-900 mb-6 font-serif">Контакти</h3>
            <p className="text-xl text-amber-700">Зв'яжіться з нами будь-яким зручним способом</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-10 max-w-6xl mx-auto">
            <div className="text-center bg-gradient-to-br from-amber-50 to-orange-50 p-10 rounded-2xl shadow-xl border-4 border-amber-200">
              <div className="bg-amber-100 p-4 rounded-full w-fit mx-auto mb-6">
                <Icon name="Phone" className="w-12 h-12 text-amber-600" />
              </div>
              <h4 className="font-bold mb-4 text-amber-900 text-xl">Телефон</h4>
              <p className="text-amber-800 font-semibold text-lg">+380 (67) 123-45-67</p>
            </div>
            <div className="text-center bg-gradient-to-br from-amber-50 to-orange-50 p-10 rounded-2xl shadow-xl border-4 border-amber-200">
              <div className="bg-amber-100 p-4 rounded-full w-fit mx-auto mb-6">
                <Icon name="Mail" className="w-12 h-12 text-amber-600" />
              </div>
              <h4 className="font-bold mb-4 text-amber-900 text-xl">Email</h4>
              <p className="text-amber-800 font-semibold text-lg">info@dobri-bdjoly.ua</p>
            </div>
            <div className="text-center bg-gradient-to-br from-amber-50 to-orange-50 p-10 rounded-2xl shadow-xl border-4 border-amber-200">
              <div className="bg-amber-100 p-4 rounded-full w-fit mx-auto mb-6">
                <Icon name="MapPin" className="w-12 h-12 text-amber-600" />
              </div>
              <h4 className="font-bold mb-4 text-amber-900 text-xl">Адреса</h4>
              <p className="text-amber-800 font-semibold text-lg">с. Медове, Україна</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gradient-to-r from-amber-900 to-orange-900 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-10">
            <div>
              <div className="flex items-center space-x-3 mb-6">
                <div className="bg-amber-600 p-3 rounded-full">
                  <Icon name="Flower2" className="w-8 h-8 text-white" />
                </div>
                <h4 className="text-2xl font-bold font-serif">Добрі бджоли</h4>
              </div>
              <p className="text-amber-200 text-lg">Натуральні продукти бджільництва з власної пасіки</p>
            </div>
            <div>
              <h5 className="font-bold mb-6 text-xl text-amber-100">Каталог</h5>
              <ul className="space-y-3 text-amber-200">
                <li><a href="#" className="hover:text-white transition-colors font-semibold">Мед різнотравний</a></li>
                <li><a href="#" className="hover:text-white transition-colors font-semibold">Мед акацієвий</a></li>
                <li><a href="#" className="hover:text-white transition-colors font-semibold">Мед гречаний</a></li>
              </ul>
            </div>
            <div>
              <h5 className="font-bold mb-6 text-xl text-amber-100">Інформація</h5>
              <ul className="space-y-3 text-amber-200">
                <li><a href="#about" className="hover:text-white transition-colors font-semibold">Про ферму</a></li>
                <li><a href="#delivery" className="hover:text-white transition-colors font-semibold">Доставка</a></li>
                <li><a href="#contacts" className="hover:text-white transition-colors font-semibold">Контакти</a></li>
              </ul>
            </div>
            <div>
              <h5 className="font-bold mb-6 text-xl text-amber-100">Зв'язок</h5>
              <div className="space-y-3 text-amber-200">
                <p className="font-semibold">+380 (67) 123-45-67</p>
                <p className="font-semibold">info@dobri-bdjoly.ua</p>
              </div>
            </div>
          </div>
          <div className="border-t border-amber-700 pt-8 mt-12 text-center text-amber-200">
            <p className="text-lg">&copy; 2024 Добрі бджоли. Усі права захищені.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;