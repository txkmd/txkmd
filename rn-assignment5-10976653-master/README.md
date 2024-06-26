# 10976653-rn-assignment5

## TRANSACTION

This is an application built with React Native. The app includes multiple screens and functionalities, such as dark mode and tab navigation. Below is a brief description of each component's usage.

### Components

#### App.js

This is the main component that renders the entire application. It sets up the bottom tab navigator with four screens: Home, My Cards, Statistics, and Settings. It also integrates the ThemeProvider to handle theme switching.

#### ThemeContext.js

This component provides the context and functionality for theme switching between light mode and dark mode. It includes the theme definitions and a function to toggle the theme.

#### Home.js

This component displays the homepage with a user profile picture, a welcome message, a search icon, a credit card image, transaction options (Send, Receive, Loan, Topup), and a list of recent transactions.

#### MyCards.js

This component displays the user's cards. Each card includes details such as the card type, card number, and balance.

#### Statistics.js

This component provides statistical data about the user's financial activities, such as spending patterns and savings over time.

#### Settings.js

This component provides the settings screen where users can toggle dark mode, manage notifications, update security settings, and access other app settings.

### Core Components Used:

- `View`: Used as a container for other components.
- `Text`: Displays text in the app.
- `StyleSheet`: Creates a style sheet to style components.
- `Image`: Displays images, such as user avatars and icons.
- `TouchableOpacity`: A button that responds to touch events.
- `StatusBar`: Manages the status bar at the top of the screen.

## Features

- **Dark Mode**: Toggle between light and dark themes.
- **Tab Navigation**: Seamless navigation between different screens using a bottom tab navigator.
- **User Profile**: Display user profile information and recent transactions on the home screen.
- **Settings**: Manage app settings, including theme and notification preferences.

## Screenshots of the app on iPhone 13 Pro

![HomePage - Light Theme](HomePage.png)
![SettingsPage - Light Theme](SettingsPage.png)
![HomePage - Dark Theme](HomePage_Dark.png)
![HomePage - Dark Theme](SettingsPage_Dark.png)
