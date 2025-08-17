#!/bin/bash

echo "🚀 Обновление GitHub Pages для ElectroNick Bot Market"

# Сборка проекта
echo "📦 Сборка проекта..."
npm run build

# Переключение на ветку gh-pages
echo "🔄 Переключение на ветку gh-pages..."
git checkout gh-pages

# Очистка текущих файлов
echo "🧹 Очистка старых файлов..."
git rm -rf .

# Копирование новых файлов
echo "📋 Копирование новых файлов..."
cp -r out/* .

# Добавление файлов в git
echo "➕ Добавление файлов в git..."
git add .

# Коммит изменений
echo "💾 Коммит изменений..."
git commit -m "Update GitHub Pages - $(date)"

# Отправка изменений
echo "📤 Отправка изменений..."
git push origin gh-pages

# Возврат к основной ветке
echo "🔄 Возврат к основной ветке..."
git checkout main

echo "✅ GitHub Pages обновлен!"
echo "🌐 Ваше приложение доступно по адресу: https://electronickp.github.io/ElectroNick-bot-market/"
