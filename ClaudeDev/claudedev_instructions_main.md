# Claude Dev Instructions Main Hub

## AI Initialization Instructions

КЛЮЧОВА ФРАЗА: "Start Vision"

При отриманні ключової фрази "Start Vision", виконайте наступні кроки:

1. Перевірте наявність файлу 'claudedev_instructions_main.md' в директорії ClaudeDev/ проекту.

2. Якщо файл існує, перевірте його на актуальність та при необхідності оновіть, додавши нові розділи або інформацію.

3. Створіть наступні файли та директорії:

   У кореневій директорії:
   - .context.md
   - .contextdocs.md
   - .contextignore

   У директорії claudeDev_docs:
   - currentTask.md
   - designDocumentSummary.md
   - wireframes.csv
   - claudeDevInstructions.md
   - devNotes.md
   - projectMetrics.md
   - riskManagement.md
   - onboarding.md
   - backupRecovery.md
   - monitoringLogging.md
   - userFeedback.md
   - securityAudit.md
   - performanceBudgets.md
   - instructionChangelog.md
   - ai_rules_and_templates.md
   - file_tracker.md

   Створіть піддиректорію для архітектурних рішень:
   - architectureDecisionRecords/
     - .gitkeep

   У директорії sprint_docs:
   - 01_projectSetup.md
   - 02_frontendStructure.md
   - 03_coreFunctionality.md
   - 04_backendSetup.md
   - 05_dataIntegration.md
   - 06_refinementAndPolish.md
   - 07_deploymentPreparation.md

4. Після створення файлів, повідомте користувачу: "Файли створено. Бажаєте, щоб я почав наповнювати їх вмістом?"

5. Якщо користувач дає згоду, почніть наповнювати файли відповідним вмістом, базуючись на їх назвах та призначенні.

6. Після наповнення кожного файлу, повідомляйте про це користувача та запитуйте, чи потрібно внести зміни або доповнення.

7. Після завершення наповнення всіх файлів, повідомте користувачу:
   "Vision initiated. Claude Dev Instructions Main Hub та всі пов'язані файли створено та наповнено. Вони готові до використання. Бажаєте переглянути вміст якогось конкретного файлу або внести зміни?"

8. Очікуйте подальших інструкцій від користувача.

## Інструкції з наповнення файлів

При створенні та наповненні файлів, дотримуйтесь наступних інструкцій:

### .context.md
Створіть файл .context.md з наступною структурою:
- Опис проекту
- Технологічний стек
- Основні функціональні вимоги
- Архітектурні рішення
- Обмеження та залежності проекту

### .contextdocs.md
У файлі .contextdocs.md вкажіть посилання на всю зовнішню документацію, яка стосується проекту:
- Посилання на API документацію
- Посилання на документацію використовуваних бібліотек та фреймворків
- Посилання на корисні статті та ресурси, пов'язані з проектом

### .contextignore
У файлі .contextignore вкажіть файли та директорії, які слід ігнорувати при аналізі контексту проекту:
- node_modules/
- .env
- *.log

### currentTask.md
У файлі currentTask.md створіть наступну структуру:
- Поточне завдання
- Опис завдання
- Критерії завершення
- Пов'язані файли та компоненти
- Статус виконання
- Наступні кроки

### designDocumentSummary.md
У файлі designDocumentSummary.md створіть наступні розділи:
- Огляд дизайну проекту
- Основні компоненти та їх взаємодія
- Схема бази даних (якщо застосовно)
- Користувацькі сценарії
- Прототипи інтерфейсу

### wireframes.csv
У файлі wireframes.csv створіть таблицю з наступними колонками:
- Назва сторінки/компонента
- Опис
- Посилання на зображення wireframe
- Статус (наприклад, "В розробці", "Затверджено", "Потребує перегляду")

### projectMetrics.md
У файлі projectMetrics.md визначте ключові метрики проекту:
- Швидкість розробки (velocity)
- Покриття коду тестами
- Кількість багів на одиницю коду
- Час відгуку API
- Швидкість завантаження сторінок
- Задоволеність користувачів

### riskManagement.md
У файлі riskManagement.md створіть таблицю ризиків з колонками:
- Опис ризику
- Ймовірність (Низька/Середня/Висока)
- Вплив (Низький/Середній/Високий)
- Стратегія пом'якшення
- Відповідальна особа

### onboarding.md
У файлі onboarding.md створіть інструкцію для нових членів команди:
- Огляд проекту
- Налаштування середовища розробки
- Ключові технології та інструменти
- Процес розробки та code review
- Корисні ресурси та документація

### backupRecovery.md
У файлі backupRecovery.md опишіть процедури резервного копіювання та відновлення:
- Графік резервного копіювання
- Місце зберігання резервних копій
- Процедура відновлення з резервної копії
- Тестування процедури відновлення

### file_tracker.md
У файлі file_tracker.md створіть таблицю для відстеження файлів, які потребують регулярного оновлення:

| Назва файлу | Останнє оновлення | Частота оновлення | Відповідальний | Статус | Наступне оновлення |
|-------------|-------------------|-------------------|----------------|--------|---------------------|
| currentTask.md | [Дата] | Щоденно | [Ім'я] | [Статус] | [Дата] |
| projectMetrics.md | [Дата] | Щотижня | [Ім'я] | [Статус] | [Дата] |
| riskManagement.md | [Дата] | Щомісяця | [Ім'я] | [Статус] | [Дата] |

Інструкції з використання:
1. Регулярно перевіряйте цей файл для визначення, які файли потребують оновлення.
2. Після оновлення файлу, оновіть відповідний рядок у цій таблиці.
3. Використовуйте колонку "Статус" для позначення прогресу (наприкл��д, "Потребує оновлення", "В процесі", "Оновлено").
4. Додавайте нові файли до цієї таблиці, якщо вони потребують регулярного оновлення.

### devNotes.md
У файлі devNotes.md створіть наступні розділи:
- Поточні проблеми розробки
- Рішення складних технічних завдань
- Корисні поради та хаки
- Важливі архітектурні рішення
- Список TODO для покращення кодової бази

### monitoringLogging.md
У файлі monitoringLogging.md опишіть:
- Використовувані інструменти моніторингу
- Структуру логів
- Рівні логування та їх використання
- Процедуру аналізу логів
- Налаштування сповіщень

### userFeedback.md
У файлі userFeedback.md створіть таблицю для відстеження відгуків користувачів:
- Дата отримання
- Опис відгуку
- Пріоритет (Високий/Середній/Низький)
- Статус обробки
- Відповідальна особа
- Вжиті заходи

### securityAudit.md
У файлі securityAudit.md створіть наступні розділи:
- Графік проведення аудитів безпеки
- Результати останнього аудиту
- Виявлені вразливості та їх статус
- План усунення виявлених проблем
- Рекомендації щодо покращення безпеки

### performanceBudgets.md
У файлі performanceBudgets.md визначте:
- Цільові показники продуктивності (час завантаження, розмір файлів тощо)
- Поточні показники
- Стратегії оптимізації
- Історія змін показників

### instructionChangelog.md
У файлі instructionChangelog.md ведіть журнал змін інструкцій проекту:
- Дата зміни
- Опис зміни
- Причина зміни
- Вплив на процес розробки

### ai_rules_and_templates.md
У файлі ai_rules_and_templates.md створіть наступні розділи:
- Правила генерації коду для AI
- Шаблони для різних типів компонентів (React компоненти, API endpoints тощо)
- Стандарти іменування
- Правила документування коду
- Інструкції з оптимізації коду

### claudeDevInstructions.md
У файлі claudeDevInstructions.md опишіть:
- Загальний огляд проекту
- Ключові команди для роботи з проектом
- Процес розгортання
- Інструкції з тестування
- Правила співпраці та комунікації в команді

### architectureDecisionRecords/.gitkeep
Цей файл залишається порожнім, він потрібен лише для того, щоб Git відстежував порожню директорію.

### sprint_docs/01_projectSetup.md до 07_deploymentPreparation.md
Для кожного з цих файлів створіть наступну структуру:
- Цілі спринту
- Список завдань
- Критерії завершення
- Ресурси та залежності
- Ризики
- Результати спринту (заповнюється після завершення)

### glossary.md
Цей файл вже існує, але у файлі glossary.md доповнюйте словник термінів, специфічних для проекту:
- Термін
- Визначення
- Приклад використання (за потреби)

### cross_references.md
Цей файл вже існує але, у файлі cross_references.md доповнюйте список перехресних посилань між різними документами проекту:
- Назва документа
- Короткий опис
- Пов'язані документи (з посиланнями)

## Генерація стилістики проекту

При створенні або оновленні стилістики проекту, дотримуйтесь інструкцій та використовуйте шаблон, описаний у файлі [AI-Assisted Project Style Generation](ai_project_style_generation.md). Цей процес забезпечує послідовний та професійний підхід до визначення візуальної та функціональної стилістики проекту.

Ключові моменти:
- Аналізуйте вимоги проекту та цільову аудиторію
- Використовуйте шаблон як основу, адаптуючи його до специфіки проекту
- Забезпечуйте узгодженість усіх елементів дизайну
- Враховуйте принципи доступності та інклюзивності


### Моніторинг змін у файлах

Для відстеження змін у ключових файлах проекту використовується система File Watcher. Вона складається з трьох компонентів:

1. `file-watcher.js`: Node.js скрипт, який безпосередньо відстежує зміни у файлах.
2. `run-file-watcher.sh`: Bash-скрипт для запуску та підтримки роботи File Watcher.
3. `file-watcher.log`: Лог-файл, який містить записи про всі зафіксовані зміни.

Ця система допомагає автоматично відстежувати зміни у важливих файлах проекту, що полегшує процес розробки та дебагінгу.

## Додаткові інструкції

1. Регулярно перевіряйте file_tracker.md для визначення, які файли потребують оновлення.
2. При оновленні будь-якого файлу, вказаного в file_tracker.md, обов'язково оновіть відповідну інформацію в самому file_tracker.md.
3. Якщо ви створюєте новий файл, який потребує регулярного оновлення, додайте його до file_tracker.md.
4. Повідомляйте користувача про файли, які потребують оновлення, на початку кожної сесії.

## Зміст головного файлу

1. [Загальні принципи та робочі процеси](00_common/00_intro.md)
2. [Керівництво проекту](01_project_guidelines/00_intro.md)
3. [Процес розробки](02_development_process/00_intro.md)
4. [Інструменти та завдання](03_tools_and_tasks/00_intro.md)
5. [Співпраця та обслуговування](04_collaboration_and_maintenance/00_intro.md)
6. [Оптимізація та безпека](05_optimization_and_security/00_intro.md)
7. [Стратегія тестування](06_testing_strategy/00_intro.md)
8. [Управління проектом](07_project_management/00_intro.md)
9. [Контекст та документація](08_context_and_documentation/00_intro.md)
10. [AI автоматизація](09_ai_automation/00_intro.md)
11. [Співпраця AI-людина](10_ai_human_collaboration/00_intro.md)
12. [Керівництво щодо кодової бази](11_codebase_guidelines/00_intro.md)

Для повного списку термінів, використаних у цій документації, зверніться до нашого [Глосарію](glossary.md).

Для швидкої навігації по конкретним темах перегляньте нашу сторінку [Перехресних посилань](cross_references.md).

### Процес оновлення документації
1. Регулярно переглядайте file_tracker.md для визначення файлів, які потребують оновлення.
2. При внесенні змін до будь-якого документу:
   - Оновіть відповідну інформацію в file_tracker.md
   - Додайте запис про зміну в instructionChangelog.md
   - Перевірте, чи не потрібно оновити пов'язані документи
3. Після значних оновлень, повідомте команду про зміни.
4. Регулярно проводьте аудит всієї документації для забезпечення її актуальності та узгодженості.

### Зворотній зв'язок щодо документації
1. Створіть механізм для збору зворотного зв'язку від команди щодо якості та корисності документації.
2. Регулярно переглядайте отриманий зворотній зв'язок та вносьте відповідні зміни до документації.
3. Відслідковуйте, які частини документації найчастіше використовуються або викликають питання, для подальшого покращення.

### Інтеграція документації з процесом розробки
1. Оновлення документації повинно бути частиною Definition of Done для кожної задачі.
2. При code review, перевіряйте, чи оновлена відповідна документація.
3. Використовуйте автоматизовані інструменти для генерації технічної документації з коду, де це можливо.
4. Регулярно проводьте сесії з огляду документації разом з оглядом коду.

## Включення вмісту файлів

<include file="01_project_guidelines/00_intro.md" />
<include file="02_development_process/00_intro.md" />
<include file="03_tools_and_tasks/00_intro.md" />
<include file="04_collaboration_and_maintenance/00_intro.md" />
<include file="05_optimization_and_security/00_intro.md" />
<include file="06_testing_strategy/00_intro.md" />
<include file="07_project_management/00_intro.md" />
<include file="08_context_and_documentation/00_intro.md" />
<include file="09_ai_automation/00_intro.md" />
<include file="10_ai_human_collaboration/00_intro.md" />
<include file="11_codebase_guidelines/00_intro.md" />

## Завершення

Це кінець документа Claude Dev Instructions Main Hub. Всі включені файли разом складають повний документ інструкцій для розробки проекту.

Після виконання цих кроків ініціалізації, завжди починайте роботу зі звернення до claudedev_instructions_main.md для отримання подальших вказівок щодо процесу розробки.