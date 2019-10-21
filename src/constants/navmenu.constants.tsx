export const navMenuItems = {
  controlPanel: {
    title: "Панель управления",
    icon: "pie-chart"
  },

  requests: {
    title: "Заявки",
    icon: "file-done",
    subitems: {
      FNSregistration: {
        title: "Регистрация в ФНС"
      },
      cashboxRegistration: {
        title: "Регистрация кассы"
      },
      russianRegistry: {
        title: "Росреестр"
      }
    }
  },

  clients: {
    title: "Клиенты",
    icon: "user",
    subitems: {
      first: {
        title: "Подменю клиентов 1"
      },
      second: {
        title: "Подменю клиентов 2"
      }
    }
  },

  settings: {
    title: "Настройки",
    icon: "setting",
    subitems: {
      first: {
        title: "Подменю настройки 1"
      },
      second: {
        title: "Подменю настройки 2"
      }
    }
  },

  knowledgeBase: {
    title: "База знаний",
    icon: "info-circle"
  },

  personalAccount: {
    title: "Лицевой счет",
    icon: "solution"
  }
};
