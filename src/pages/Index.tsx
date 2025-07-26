import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const Index = () => {
  const services = [
    {
      title: "Аренда",
      description: "Подбор коммерческих помещений в аренду для вашего бизнеса",
      icon: "Key"
    },
    {
      title: "Продажа", 
      description: "Покупка и продажа коммерческой недвижимости",
      icon: "Home"
    },
    {
      title: "Консультации",
      description: "Экспертные консультации по вопросам недвижимости",
      icon: "MessageCircle"
    },
    {
      title: "Подбор помещений",
      description: "Индивидуальный подбор под ваши требования",
      icon: "Search"
    },
    {
      title: "Ремонты",
      description: "Качественный ремонт коммерческих помещений",
      icon: "Wrench"
    },
    {
      title: "Строительство",
      description: "Строительство объектов коммерческой недвижимости",
      icon: "Building"
    }
  ];

  const cases = [
    {
      title: "Торговый центр 'Галерея'",
      area: "15,000 м²",
      location: "Центральный район",
      status: "Продано"
    },
    {
      title: "Офисное здание 'Деловой квартал'", 
      area: "8,500 м²",
      location: "Деловой центр",
      status: "Сдано в аренду"
    },
    {
      title: "Производственный комплекс",
      area: "25,000 м²", 
      location: "Промышленная зона",
      status: "Построено"
    }
  ];

  const reviews = [
    {
      name: "Михаил Петров",
      company: "ООО 'Торговый дом'",
      text: "Отличная работа! Помогли найти идеальное помещение для нашего магазина в центре города.",
      rating: 5
    },
    {
      name: "Елена Сидорова", 
      company: "ИП Сидорова",
      text: "Профессиональный подход к решению задач. Быстро нашли офис под наши требования.",
      rating: 5
    },
    {
      name: "Андрей Козлов",
      company: "Группа компаний 'Развитие'", 
      text: "Надежные партнеры в сфере коммерческой недвижимости. Рекомендую!",
      rating: 5
    }
  ];

  return (
    <div className="min-h-screen bg-secondary-50">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="container mx-auto px-4 py-4">
          <nav className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Icon name="Building2" size={32} className="text-primary" />
              <h1 className="text-2xl font-bold text-secondary-700">Инвестора недвижимость и бизнес</h1>
            </div>
            <div className="hidden md:flex items-center space-x-6">
              <a href="#services" className="text-secondary-600 hover:text-primary transition-colors">Услуги</a>
              <a href="#cases" className="text-secondary-600 hover:text-primary transition-colors">Кейсы</a>
              <a href="#reviews" className="text-secondary-600 hover:text-primary transition-colors">Отзывы</a>
              <a href="#contact" className="text-secondary-600 hover:text-primary transition-colors">Контакты</a>
            </div>
            <Button className="bg-primary hover:bg-primary-600">
              Связаться с нами
            </Button>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-50 to-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-5xl font-bold text-secondary-700 mb-6">
            Профессиональные решения для коммерческой недвижимости
          </h2>
          <p className="text-xl text-secondary-600 mb-8 max-w-3xl mx-auto">
            Агентство полного цикла: от поиска и аренды до строительства и ремонта коммерческих объектов
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-primary hover:bg-primary-600">
              <Icon name="Phone" size={20} className="mr-2" />
              Получить консультацию
            </Button>
            <Button size="lg" variant="outline" className="border-primary text-primary hover:bg-primary hover:text-white">
              <Icon name="Download" size={20} className="mr-2" />
              Скачать каталог
            </Button>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h3 className="text-4xl font-bold text-secondary-700 mb-4">Наши услуги</h3>
            <p className="text-xl text-secondary-600">Полный спектр услуг для развития вашего бизнеса</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow duration-300 animate-fade-in">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <div className="bg-primary-50 p-3 rounded-lg mr-4">
                      <Icon name={service.icon} size={24} className="text-primary" />
                    </div>
                    <h4 className="text-xl font-semibold text-secondary-700">{service.title}</h4>
                  </div>
                  <p className="text-secondary-600">{service.description}</p>
                  <Button variant="ghost" className="mt-4 p-0 h-auto text-primary hover:text-primary-600">
                    Подробнее →
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Cases Section */}
      <section id="cases" className="py-20 bg-secondary-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h3 className="text-4xl font-bold text-secondary-700 mb-4">Наши кейсы</h3>
            <p className="text-xl text-secondary-600">Успешно реализованные проекты</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {cases.map((caseItem, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-6">
                  <div className="bg-primary-100 h-48 rounded-lg mb-6 flex items-center justify-center">
                    <Icon name="Building" size={48} className="text-primary" />
                  </div>
                  <h4 className="text-xl font-semibold text-secondary-700 mb-2">{caseItem.title}</h4>
                  <div className="space-y-2 text-secondary-600">
                    <div className="flex items-center">
                      <Icon name="Square" size={16} className="mr-2" />
                      <span>Площадь: {caseItem.area}</span>
                    </div>
                    <div className="flex items-center">
                      <Icon name="MapPin" size={16} className="mr-2" />
                      <span>{caseItem.location}</span>
                    </div>
                    <div className="flex items-center">
                      <Icon name="CheckCircle" size={16} className="mr-2 text-green-500" />
                      <span className="font-medium text-green-600">{caseItem.status}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Reviews Section */}
      <section id="reviews" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h3 className="text-4xl font-bold text-secondary-700 mb-4">Отзывы клиентов</h3>
            <p className="text-xl text-secondary-600">Что говорят о нас наши партнеры</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {reviews.map((review, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    {[...Array(review.rating)].map((_, i) => (
                      <Icon key={i} name="Star" size={16} className="text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-secondary-600 mb-4 italic">"{review.text}"</p>
                  <div>
                    <h5 className="font-semibold text-secondary-700">{review.name}</h5>
                    <p className="text-sm text-secondary-500">{review.company}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Work Conditions Section */}
      <section className="py-20 bg-secondary-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h3 className="text-4xl font-bold text-secondary-700 mb-4">Условия работы</h3>
            <p className="text-xl text-secondary-600">Прозрачное сотрудничество на выгодных условиях</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-primary-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="Clock" size={24} className="text-primary" />
              </div>
              <h4 className="text-lg font-semibold text-secondary-700 mb-2">Быстрое реагирование</h4>
              <p className="text-secondary-600">Ответ в течение 1 часа</p>
            </div>
            <div className="text-center">
              <div className="bg-primary-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="Shield" size={24} className="text-primary" />
              </div>
              <h4 className="text-lg font-semibold text-secondary-700 mb-2">Гарантия качества</h4>
              <p className="text-secondary-600">Официальное оформление сделок</p>
            </div>
            <div className="text-center">
              <div className="bg-primary-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="Users" size={24} className="text-primary" />
              </div>
              <h4 className="text-lg font-semibold text-secondary-700 mb-2">Персональный менеджер</h4>
              <p className="text-secondary-600">Индивидуальный подход</p>
            </div>
            <div className="text-center">
              <div className="bg-primary-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="TrendingUp" size={24} className="text-primary" />
              </div>
              <h4 className="text-lg font-semibold text-secondary-700 mb-2">Выгодные условия</h4>
              <p className="text-secondary-600">Комиссия от 1%</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-primary text-white">
        <div className="container mx-auto px-4 text-center">
          <h3 className="text-4xl font-bold mb-4">Готовы начать сотрудничество?</h3>
          <p className="text-xl mb-8 opacity-90">Свяжитесь с нами для получения персональной консультации</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" className="bg-white text-primary hover:bg-secondary-100">
              <Icon name="Phone" size={20} className="mr-2" />
              +7 (495) 123-45-67
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-primary">
              <Icon name="Mail" size={20} className="mr-2" />
              info@investora-realty.ru
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-secondary-700 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <Icon name="Building2" size={24} className="text-primary" />
                <h4 className="text-lg font-semibold">Инвестора недвижимость и бизнес</h4>
              </div>
              <p className="text-secondary-300">Профессиональные решения в сфере коммерческой недвижимости</p>
            </div>
            <div>
              <h5 className="font-semibold mb-4">Услуги</h5>
              <ul className="space-y-2 text-secondary-300">
                <li>Аренда помещений</li>
                <li>Продажа недвижимости</li>
                <li>Консультации</li>
                <li>Строительство</li>
              </ul>
            </div>
            <div>
              <h5 className="font-semibold mb-4">Контакты</h5>
              <ul className="space-y-2 text-secondary-300">
                <li>+7 (495) 123-45-67</li>
                <li>info@investora-realty.ru</li>
                <li>г. Москва, ул. Деловая, д. 1</li>
              </ul>
            </div>
            <div>
              <h5 className="font-semibold mb-4">Режим работы</h5>
              <ul className="space-y-2 text-secondary-300">
                <li>Пн-Пт: 9:00-18:00</li>
                <li>Сб: 10:00-16:00</li>
                <li>Вс: выходной</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-secondary-600 mt-8 pt-8 text-center text-secondary-300">
            <p>&copy; 2024 Инвестора недвижимость и бизнес. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;