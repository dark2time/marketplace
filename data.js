// Глобальное хранилище данных
let globalStorage = {
    marketplaceItems: [], // Товары
    marketplaceUsers: []  // Пользователи
};

// Функция для сохранения данных
function saveData() {
    localStorage.setItem("globalStorage", JSON.stringify(globalStorage));
}

// Функция для загрузки данных
function loadData() {
    const data = JSON.parse(localStorage.getItem("globalStorage")) || {};
    globalStorage.marketplaceItems = data.marketplaceItems || [];
    globalStorage.marketplaceUsers = data.marketplaceUsers || [];
}

// Инициализация хранилища
loadData();