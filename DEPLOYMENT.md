# Развертывание ElectroNick Bot Market

## Вариант 1: Vercel (Рекомендуется)

### Шаги для развертывания:

1. **Установите Vercel CLI:**
   ```bash
   npm install -g vercel
   ```

2. **Войдите в аккаунт Vercel:**
   ```bash
   vercel login
   ```

3. **Разверните приложение:**
   ```bash
   vercel --prod
   ```

4. **Следуйте инструкциям в терминале:**
   - Выберите "Link to existing project" или создайте новый
   - Подтвердите настройки
   - Дождитесь завершения развертывания

5. **Получите URL приложения** (например: https://your-app.vercel.app)

## Вариант 2: Netlify

### Шаги для развертывания:

1. **Создайте аккаунт на Netlify**

2. **Подключите репозиторий:**
   - Перейдите в Netlify Dashboard
   - Нажмите "New site from Git"
   - Выберите ваш репозиторий

3. **Настройте сборку:**
   - Build command: `npm run build`
   - Publish directory: `out`
   - Node version: `18`

4. **Разверните приложение**

## Вариант 3: GitHub Pages

### Шаги для развертывания:

1. **Обновите next.config.js:**
   ```javascript
   /** @type {import('next').NextConfig} */
   const nextConfig = {
     output: 'export',
     trailingSlash: true,
     images: {
       unoptimized: true,
       domains: ['t.me', 'cdn4.telegram-cdn.org'],
     },
   }
   
   module.exports = nextConfig
   ```

2. **Создайте GitHub Actions workflow:**
   Создайте файл `.github/workflows/deploy.yml`:
   ```yaml
   name: Deploy to GitHub Pages
   
   on:
     push:
       branches: [ main ]
   
   jobs:
     build-and-deploy:
       runs-on: ubuntu-latest
       steps:
         - uses: actions/checkout@v2
         - uses: actions/setup-node@v2
           with:
             node-version: '18'
         - run: npm ci
         - run: npm run build
         - uses: peaceiris/actions-gh-pages@v3
           with:
             github_token: ${{ secrets.GITHUB_TOKEN }}
             publish_dir: ./out
   ```

3. **Включите GitHub Pages в настройках репозитория**

## Вариант 4: Docker

### Создайте Dockerfile:

```dockerfile
FROM node:18-alpine

WORKDIR /app

COPY package*.json ./
RUN npm ci --only=production

COPY . .
RUN npm run build

EXPOSE 3000

CMD ["npm", "start"]
```

### Сборка и запуск:

```bash
docker build -t electro-nick-bot-market .
docker run -p 3000:3000 electro-nick-bot-market
```

## Настройка домена

После развертывания вы можете:

1. **Настроить кастомный домен** в панели управления вашего хостинга
2. **Добавить SSL сертификат** (обычно предоставляется автоматически)
3. **Настроить CDN** для улучшения производительности

## Переменные окружения

При необходимости добавьте в настройки хостинга:

```env
NODE_ENV=production
NEXT_PUBLIC_APP_URL=https://your-domain.com
```

## Мониторинг

После развертывания рекомендуется:

1. **Настроить мониторинг** (например, Sentry для ошибок)
2. **Добавить аналитику** (Google Analytics, Plausible)
3. **Настроить логирование** для отслеживания производительности

## Обновления

Для обновления приложения:

1. Внесите изменения в код
2. Зафиксируйте изменения: `git add . && git commit -m "Update"`
3. Отправьте в репозиторий: `git push`
4. Автоматическое развертывание произойдет через CI/CD

---

**Примечание:** Vercel является наиболее простым и рекомендуемым вариантом для Next.js приложений, так как предоставляет автоматическую оптимизацию и интеграцию.
