# Отчет о миграции ScrollToTopButton

## Выполненные действия
- [x] Создана новая структура директорий
- [x] Выделена логика в хук useScrollToTop
- [x] Использован общий хук useMediaQuery
- [x] Добавлены типы
- [x] Добавлены тесты
- [x] Создана документация
- [x] Обновлены импорты

## Измененные файлы
- Создана новая структура в /new_src/modules/main/components/ui/ScrollToTopButton/
- Добавлен хук useScrollToTop для управления состоянием
- Добавлены тесты компонента
- Стили вынесены в отдельный модуль

## Проблемы и решения
- Проблема: Прямое использование window.innerWidth
  Решение: Использован общий хук useMediaQuery
- Проблема: Сложная логика в компоненте
  Решение: Выделена в отдельный хук useScrollToTop

## Следующие шаги
- [ ] Добавить анимацию появления/исчезновения
- [ ] Добавить настройку порога прокрутки через props
- [ ] Улучшить доступность компонента 