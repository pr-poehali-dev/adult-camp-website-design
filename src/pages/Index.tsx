import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [activeSection, setActiveSection] = useState('home');

  const scrollToSection = (id: string) => {
    setActiveSection(id);
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  const activities = [
    {
      icon: 'Mountain',
      title: 'Треккинг',
      description: 'Живописные маршруты по горным тропам различной сложности'
    },
    {
      icon: 'Tent',
      title: 'Походы',
      description: 'Многодневные походы с ночевкой в палатках под звездами'
    },
    {
      icon: 'Compass',
      title: 'Ориентирование',
      description: 'Обучение навыкам навигации и работы с картой и компасом'
    },
    {
      icon: 'Trees',
      title: 'Эко-туры',
      description: 'Знакомство с флорой и фауной местных заповедников'
    }
  ];

  const prices = [
    {
      name: 'Выходной день',
      duration: '2 дня / 1 ночь',
      price: '8 500 ₽',
      features: ['Размещение в палатках', 'Трехразовое питание', 'Гид-инструктор', 'Прокат снаряжения']
    },
    {
      name: 'Недельный маршрут',
      duration: '7 дней / 6 ночей',
      price: '28 000 ₽',
      features: ['Размещение в палатках', 'Трехразовое питание', 'Опытный гид', 'Снаряжение в комплекте', 'Трансфер к месту старта']
    },
    {
      name: 'Экспедиция',
      duration: '14 дней / 13 ночей',
      price: '52 000 ₽',
      features: ['Палаточный лагерь', 'Полное питание', 'Команда гидов', 'Профессиональное снаряжение', 'Трансфер туда-обратно', 'Медицинская поддержка']
    }
  ];

  const testimonials = [
    {
      name: 'Алексей М.',
      text: 'Невероятные впечатления! Три дня в горах полностью перезагрузили голову. Гиды профессиональные, маршруты продуманные.',
      rating: 5
    },
    {
      name: 'Мария К.',
      text: 'Впервые была в таком походе. Организация на высоте, группа дружная, природа потрясающая. Обязательно вернусь!',
      rating: 5
    },
    {
      name: 'Дмитрий П.',
      text: 'Отличный способ отдохнуть от городской суеты. Физическая нагрузка в меру, виды захватывающие. Рекомендую всем!',
      rating: 5
    }
  ];

  const gallery = [
    'https://cdn.poehali.dev/projects/22449f29-54dc-4b6f-8b40-24f2c1340c24/files/b59bfdc4-081c-432e-8abd-d3094a991758.jpg',
    'https://cdn.poehali.dev/projects/22449f29-54dc-4b6f-8b40-24f2c1340c24/files/0010bece-f093-4b2e-84aa-2838286f69fd.jpg',
    'https://cdn.poehali.dev/projects/22449f29-54dc-4b6f-8b40-24f2c1340c24/files/436d2625-abfd-4a89-9541-8872130b2046.jpg'
  ];

  return (
    <div className="min-h-screen">
      <nav className="fixed top-0 w-full bg-white/90 backdrop-blur-sm shadow-sm z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <h1 className="font-heading text-2xl font-bold text-primary flex items-center gap-2">
              <Icon name="Mountain" size={28} />
              Лагерь Вершина
            </h1>
            <div className="hidden md:flex gap-6">
              {['Главная', 'Активности', 'Цены', 'Отзывы', 'Галерея', 'Контакты'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className={`font-medium transition-colors hover:text-primary ${
                    activeSection === item.toLowerCase() ? 'text-primary' : 'text-foreground'
                  }`}
                >
                  {item}
                </button>
              ))}
            </div>
          </div>
        </div>
      </nav>

      <section
        id="главная"
        className="relative min-h-screen flex items-center justify-center pt-16"
        style={{
          backgroundImage: `linear-gradient(rgba(45, 80, 22, 0.4), rgba(45, 80, 22, 0.6)), url('${gallery[0]}')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
        <div className="container mx-auto px-4 text-center text-white animate-fade-in">
          <h2 className="font-heading text-5xl md:text-7xl font-bold mb-6">
            Открой для себя дикую природу
          </h2>
          <p className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto">
            Лагерь для взрослых, где каждый день — новое приключение среди живописных гор и лесов
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <Button size="lg" onClick={() => scrollToSection('цены')} className="bg-primary hover:bg-primary/90">
              Посмотреть программы
            </Button>
            <Button size="lg" variant="outline" onClick={() => scrollToSection('контакты')} className="bg-white/10 backdrop-blur-sm border-white text-white hover:bg-white/20">
              Связаться с нами
            </Button>
          </div>
        </div>
      </section>

      <section id="активности" className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-center mb-4 text-primary">
            Наши активности
          </h2>
          <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
            Походы и треккинг по живописным маршрутам в окружении нетронутой природы
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {activities.map((activity, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow animate-scale-in border-2">
                <CardHeader>
                  <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                    <Icon name={activity.icon} size={32} className="text-primary" />
                  </div>
                  <CardTitle className="font-heading">{activity.title}</CardTitle>
                  <CardDescription>{activity.description}</CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="цены" className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-center mb-4 text-primary">
            Программы и цены
          </h2>
          <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
            Выберите подходящую программу для своего приключения
          </p>
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {prices.map((plan, index) => (
              <Card key={index} className={`hover:shadow-xl transition-shadow ${index === 1 ? 'border-primary border-2 scale-105' : ''}`}>
                <CardHeader>
                  <CardTitle className="font-heading text-2xl">{plan.name}</CardTitle>
                  <CardDescription className="text-lg">{plan.duration}</CardDescription>
                  <p className="text-4xl font-bold text-primary mt-4">{plan.price}</p>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {plan.features.map((feature, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <Icon name="Check" size={20} className="text-primary mt-0.5" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button className="w-full mt-6" variant={index === 1 ? 'default' : 'outline'}>
                    Забронировать
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="отзывы" className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-center mb-4 text-primary">
            Отзывы участников
          </h2>
          <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
            Что говорят те, кто уже побывал в наших походах
          </p>
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex gap-1 mb-2">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Icon key={i} name="Star" size={20} className="text-yellow-500 fill-yellow-500" />
                    ))}
                  </div>
                  <CardTitle className="font-heading text-lg">{testimonial.name}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground italic">"{testimonial.text}"</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="галерея" className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-center mb-4 text-primary">
            Галерея
          </h2>
          <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
            Моменты из наших походов
          </p>
          <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {gallery.map((image, index) => (
              <div
                key={index}
                className="relative overflow-hidden rounded-2xl aspect-square group cursor-pointer"
              >
                <img
                  src={image}
                  alt={`Галерея ${index + 1}`}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <Icon name="Expand" size={32} className="text-white" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="контакты" className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-center mb-4 text-primary">
            Контакты
          </h2>
          <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
            Свяжитесь с нами для бронирования или консультации
          </p>
          <div className="max-w-2xl mx-auto">
            <Card>
              <CardContent className="pt-6">
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <Icon name="Phone" size={24} className="text-primary" />
                    </div>
                    <div>
                      <h3 className="font-heading font-semibold mb-1">Телефон</h3>
                      <p className="text-muted-foreground">+7 (999) 123-45-67</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <Icon name="Mail" size={24} className="text-primary" />
                    </div>
                    <div>
                      <h3 className="font-heading font-semibold mb-1">Email</h3>
                      <p className="text-muted-foreground">info@camp-vershina.ru</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <Icon name="MapPin" size={24} className="text-primary" />
                    </div>
                    <div>
                      <h3 className="font-heading font-semibold mb-1">Адрес</h3>
                      <p className="text-muted-foreground">Республика Алтай, Чемальский район</p>
                    </div>
                  </div>
                  <Button className="w-full mt-4" size="lg">
                    <Icon name="Send" size={20} className="mr-2" />
                    Отправить заявку
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <footer className="bg-primary text-primary-foreground py-8">
        <div className="container mx-auto px-4 text-center">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Icon name="Mountain" size={24} />
            <span className="font-heading font-bold text-xl">Лагерь Вершина</span>
          </div>
          <p className="text-sm opacity-90">© 2024 Все права защищены</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
