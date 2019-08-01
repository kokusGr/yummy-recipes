import { openDB } from 'idb'

const DB_NAME = 'YummyRecipesDB'
const DB_VERSION = 1

export const initDB = () => openDB(DB_NAME, DB_VERSION, {
    upgrade(db) {
        db.createObjectStore('recipes', { keyPath: 'id' })
    }
})