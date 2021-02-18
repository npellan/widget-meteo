# Petit widget météo codé en React avec Create React App

Un petit widget météo réalisé en 3 heures via l'API OpenWeather et Create React App. Le projet est publié via Surge sur [http://meteo-npellan.surge.sh/](http://meteo-npellan.surge.sh/).

## Lancer le projet

Télécharger ou cloner le repos.

### Prérequis

* Avoir installé Node sur sa machine (voir [la doc](https://nodejs.org/en/docs/) pour un guide d'installation complet).
* Avoir installé Yarn sur sa machine (voir [la doc](https://yarnpkg.com/getting-started/install) pour un guide d'installation complet).

### Installer le projet

Lancer la commande yarn pour installer les dépendances nécessaires au fonctionnement du projet

```bash
yarn
```

Puis lancer la commande yarn start pour lancer le projet

```bash
yarn start
```

### Variables d'environnement et API

En mode développement, une API de test est fournie dans le dossier `src/api/localeapi.js`.

En mode production, l'API OpenWeather est utilisée. Vous devrez ainsi vous créer un compte sur le site [OpenWeather](https://openweathermap.org/). Et récupérer l'API Key envoyée par email.

Puis, dans les deux cas, renseignez les variables d'environnement en suivant l'exemple `.env.example`.

Vous aurez ainsi accès à la température à Lyon en temps réel :)

## Codé avec

* React
* API OpenWeather

## Auteur

* **Nicolas PELLAN** - *Initial work* - [npellan](https://github.com/npellan)

## Remerciements

Merci à Sébastien, mon professeur React lors de ma formation au sein de l'école O'Clock.

## License

This project is licensed under the MIT License.
