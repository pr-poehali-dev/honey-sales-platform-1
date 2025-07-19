import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";

const Index = () => {
  const products = [
    {
      id: 1,
      name: "Мёд разнотравный",
      description: "Натуральный мёд с полевых цветов",
      price: "350 грн",
      volume: "500г",
      image: "/img/c5ed961d-d033-4edf-aeed-e31a7248dc76.jpg"
    },
    {
      id: 2,
      name: "Мёд акациевый",
      description: "Светлый деликатесный мёд",
      price: "420 грн",
      volume: "500г",
      image: "/img/9e34e156-d4d6-41bb-b69f-25ae718d98e2.jpg"
    },
    {
      id: 3,
      name: "Мёд гречишный",
      description: "Тёмный мёд с насыщенным вкусом",
      price: "380 грн",
      volume: "500г",
      image: "/img/9e34e156-d4d6-41bb-b69f-25ae718d98e2.jpg"
    }
  ];

  const reviews = [
    {
      name: "Анна К.",
      text: "Прекрасный мёд! Покупаю уже третий раз.",
      rating: 5
    },
    {
      name: "Дмитро М.",
      text: "Качество отличное, доставка быстрая.",
      rating: 5
    },
    {
      name: "Ольга В.",
      text: "Настоящий фермерский мёд, очень довольна!",
      rating: 5
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-honey-50 to-white">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Icon name="Hexagon" className="w-8 h-8 text-primary fill-current" />
              <div>
                <h1 className="text-2xl font-bold text-gray-900">Добрі бджоли</h1>
                <p className="text-sm text-gray-600">Натуральные продукты пчеловодства</p>
              </div>
            </div>
            <nav className="hidden md:flex space-x-6">
              <a href="#catalog" className="text-gray-700 hover:text-primary transition-colors">Каталог</a>
              <a href="#about" className="text-gray-700 hover:text-primary transition-colors">О ферме</a>
              <a href="#delivery" className="text-gray-700 hover:text-primary transition-colors">Доставка</a>
              <a href="#contacts" className="text-gray-700 hover:text-primary transition-colors">Контакты</a>
            </nav>
            <Button className="flex items-center space-x-2">
              <Icon name="ShoppingCart" size={20} />
              <span>Корзина</span>
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6">
                Натуральный мёд с собственной пасеки
              </h2>
              <p className="text-xl text-gray-600 mb-8">
                Пчелоферма "Добрі бджоли" предлагает качественные продукты пчеловодства. 
                Мёд собирается с экологически чистых угодий Украины.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="text-lg">
                  Посмотреть каталог
                </Button>
                <Button variant="outline" size="lg" className="text-lg">
                  Узнать больше
                </Button>
              </div>
            </div>
            <div className="relative">
              <img 
                src="/img/ecbda237-79d2-452d-a169-8a7736575146.jpg" 
                alt="Пчелоферма" 
                className="rounded-2xl shadow-2xl w-full h-[500px] object-cover"
              />
              <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-xl shadow-lg">
                <div className="flex items-center space-x-3">
                  <Icon name="Award" className="text-primary w-8 h-8" />
                  <div>
                    <p className="font-semibold">100% натурально</p>
                    <p className="text-sm text-gray-600">Без добавок</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Products Catalog */}
      <section id="catalog" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">Популярные сорта мёда</h3>
            <p className="text-lg text-gray-600">Выберите свой любимый вкус из нашей коллекции</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product) => (
              <Card key={product.id} className="group hover:shadow-lg transition-shadow duration-300">
                <CardHeader className="p-0">
                  <img 
                    src={product.image} 
                    alt={product.name}
                    className="w-full h-64 object-cover rounded-t-lg group-hover:scale-105 transition-transform duration-300"
                  />
                </CardHeader>
                <CardContent className="p-6">
                  <div className="flex justify-between items-start mb-2">
                    <CardTitle className="text-xl">{product.name}</CardTitle>
                    <Badge variant="secondary">{product.volume}</Badge>
                  </div>
                  <CardDescription className="mb-4">{product.description}</CardDescription>
                  <p className="text-2xl font-bold text-primary">{product.price}</p>
                </CardContent>
                <CardFooter className="p-6 pt-0">
                  <Button className="w-full" size="lg">
                    <Icon name="ShoppingCart" className="mr-2" size={18} />
                    В корзину
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 bg-honey-50">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-3xl font-bold text-gray-900 mb-6">О нашей ферме</h3>
              <p className="text-lg text-gray-700 mb-6">
                Пчелоферма "Добрі бджоли" работает уже более 15 лет. Мы следуем традиционным 
                методам пчеловодства и заботимся о качестве нашей продукции.
              </p>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Icon name="CheckCircle" className="text-primary w-6 h-6" />
                  <span>Экологически чистые угодья</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Icon name="CheckCircle" className="text-primary w-6 h-6" />
                  <span>Традиционные методы</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Icon name="CheckCircle" className="text-primary w-6 h-6" />
                  <span>Контроль качества</span>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-white p-6 rounded-xl text-center">
                <Icon name="Calendar" className="w-12 h-12 text-primary mx-auto mb-4" />
                <p className="text-2xl font-bold text-gray-900">15+</p>
                <p className="text-gray-600">лет опыта</p>
              </div>
              <div className="bg-white p-6 rounded-xl text-center">
                <Icon name="Users" className="w-12 h-12 text-primary mx-auto mb-4" />
                <p className="text-2xl font-bold text-gray-900">1000+</p>
                <p className="text-gray-600">покупателей</p>
              </div>
              <div className="bg-white p-6 rounded-xl text-center">
                <Icon name="Hexagon" className="w-12 h-12 text-primary mx-auto mb-4" />
                <p className="text-2xl font-bold text-gray-900">50+</p>
                <p className="text-gray-600">ульев</p>
              </div>
              <div className="bg-white p-6 rounded-xl text-center">
                <Icon name="Award" className="w-12 h-12 text-primary mx-auto mb-4" />
                <p className="text-2xl font-bold text-gray-900">100%</p>
                <p className="text-gray-600">натурально</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Reviews Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">Отзывы покупателей</h3>
            <p className="text-lg text-gray-600">Что говорят наши клиенты</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {reviews.map((review, index) => (
              <Card key={index}>
                <CardContent className="p-6">
                  <div className="flex mb-4">
                    {[...Array(review.rating)].map((_, i) => (
                      <Icon key={i} name="Star" className="w-5 h-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-gray-700 mb-4">"{review.text}"</p>
                  <p className="font-semibold text-gray-900">{review.name}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Delivery & Payment */}
      <section id="delivery" className="py-16 bg-honey-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">Доставка и оплата</h3>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <Icon name="Truck" className="w-12 h-12 text-primary mx-auto mb-4" />
              <h4 className="font-semibold mb-2">Быстрая доставка</h4>
              <p className="text-gray-600">По Украине 1-3 дня</p>
            </div>
            <div className="text-center">
              <Icon name="CreditCard" className="w-12 h-12 text-primary mx-auto mb-4" />
              <h4 className="font-semibold mb-2">Удобная оплата</h4>
              <p className="text-gray-600">Карта или наличные</p>
            </div>
            <div className="text-center">
              <Icon name="Shield" className="w-12 h-12 text-primary mx-auto mb-4" />
              <h4 className="font-semibold mb-2">Гарантия качества</h4>
              <p className="text-gray-600">100% натуральный продукт</p>
            </div>
            <div className="text-center">
              <Icon name="Headphones" className="w-12 h-12 text-primary mx-auto mb-4" />
              <h4 className="font-semibold mb-2">Поддержка</h4>
              <p className="text-gray-600">Консультации 24/7</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contacts" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">Контакты</h3>
            <p className="text-lg text-gray-600">Свяжитесь с нами любым удобным способом</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <Icon name="Phone" className="w-12 h-12 text-primary mx-auto mb-4" />
              <h4 className="font-semibold mb-2">Телефон</h4>
              <p className="text-gray-600">+380 (67) 123-45-67</p>
            </div>
            <div className="text-center">
              <Icon name="Mail" className="w-12 h-12 text-primary mx-auto mb-4" />
              <h4 className="font-semibold mb-2">Email</h4>
              <p className="text-gray-600">info@dobri-bdjoly.ua</p>
            </div>
            <div className="text-center">
              <Icon name="MapPin" className="w-12 h-12 text-primary mx-auto mb-4" />
              <h4 className="font-semibold mb-2">Адрес</h4>
              <p className="text-gray-600">с. Медовое, Украина</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <Icon name="Hexagon" className="w-8 h-8 text-primary fill-current" />
                <h4 className="text-xl font-bold">Добрі бджоли</h4>
              </div>
              <p className="text-gray-400">Натуральные продукты пчеловодства с собственной пасеки</p>
            </div>
            <div>
              <h5 className="font-semibold mb-4">Каталог</h5>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Мёд разнотравный</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Мёд акациевый</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Мёд гречишный</a></li>
              </ul>
            </div>
            <div>
              <h5 className="font-semibold mb-4">Информация</h5>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#about" className="hover:text-white transition-colors">О ферме</a></li>
                <li><a href="#delivery" className="hover:text-white transition-colors">Доставка</a></li>
                <li><a href="#contacts" className="hover:text-white transition-colors">Контакты</a></li>
              </ul>
            </div>
            <div>
              <h5 className="font-semibold mb-4">Связь</h5>
              <div className="space-y-2 text-gray-400">
                <p>+380 (67) 123-45-67</p>
                <p>info@dobri-bdjoly.ua</p>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-8 mt-8 text-center text-gray-400">
            <p>&copy; 2024 Добрі бджоли. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;