# 4AL2-user-email


- [Configuration Requise](#Configuration)
- [Installation](#Installation)
- [PARTIE 1](#PARTIE1)
- [PARTIE 2](#PARTIE2)
- [Notes](#Notes)

## Configuration
Assurez-vous d'avoir les versions suivantes de Node et npm installées sur votre machine :
- Node version minimale 16.x
- npm version minimale 7.x

## Installation
Pour installer les dépendances de l'application, exécutez la commande suivante dans le répertoire du projet :
```bash
npm install
```

Pour démarrer l'application, utilisez la commande :
```bash
npm run start
```

Pour démarrere les testes utilizez la commande :
```bash
npm run tests
```

## PARTIE 1
Développer le code d'une Fluent API pour un objet User, composé de son nom, prénom, âge et adresse. L'adresse est un objet complet avec numéro de rue, nom de la rue et ville.

## PARTIE 2
Développer le code qui envoie une notification par e-mail pour un utilisateur nouvellement créé. Utilisez l'injection de dépendances pour simuler l'envoi.

## Notes
- Choisissez la technique de création du pattern builder selon votre préférence, mais assurez-vous de respecter l'immutabilité.
- N'oubliez pas de fournir une implémentation Stub ou Fake pour les dépendances externes, telles que la persistance des données et le système de notification.
