# 🚀 Быстрое развертывание ElectroNick Bot Market

## Вариант 1: Автоматический скрипт (Рекомендуется)

```bash
# Запустите скрипт развертывания
./deploy.sh
```

Следуйте инструкциям в терминале для выбора платформы.

## Вариант 2: Vercel (Самый простой)

### Шаг 1: Создайте репозиторий на GitHub
```bash
# Создайте репозиторий на GitHub и отправьте код
git remote add origin https://github.com/YOUR_USERNAME/electro-nick-bot-market.git
git branch -M main
git push -u origin main
```

### Шаг 2: Разверните на Vercel
1. Перейдите на [vercel.com](https://vercel.com)
2. Нажмите "New Project"
3. Подключите ваш GitHub репозиторий
4. Нажмите "Deploy"

**Готово!** Ваше приложение будет доступно по адресу: `https://your-project.vercel.app`

## Вариант 3: Netlify

### Шаг 1: Соберите проект
```bash
npm run build:netlify
```

### Шаг 2: Разверните на Netlify
1. Перейдите на [netlify.com](https://netlify.com)
2. Перетащите папку `out` в область развертывания
3. Получите URL вашего сайта

## Вариант 4: Docker

### Локальный запуск
```bash
# Соберите и запустите контейнер
docker-compose up -d
```

### Облачный запуск
```bash
# Для любого VPS с Docker
docker build -t bot-market .
docker run -d -p 80:3000 bot-market
```

## Вариант 5: GitHub Pages

### Шаг 1: Настройте GitHub Actions
1. Отправьте код в GitHub репозиторий
2. Перейдите в Settings → Pages
3. Выберите "GitHub Actions" как источник

### Шаг 2: Автоматическое развертывание
При каждом push в main ветку приложение автоматически развернется на GitHub Pages.

---

## 🔗 Полезные ссылки

- **Vercel**: https://vercel.com
- **Netlify**: https://netlify.com
- **GitHub Pages**: https://pages.github.com
- **Docker Hub**: https://hub.docker.com

## 📝 После развертывания

1. **Проверьте работу приложения** по полученному URL
2. **Настройте кастомный домен** (опционально)
3. **Добавьте SSL сертификат** (обычно автоматически)
4. **Настройте мониторинг** (опционально)

## 🆘 Поддержка

Если возникли проблемы:
1. Проверьте логи сборки
2. Убедитесь, что все зависимости установлены
3. Проверьте конфигурацию платформы
4. Обратитесь к документации платформы

---

**🎉 Поздравляем! Ваш Telegram Bot Market теперь доступен в интернете!**
