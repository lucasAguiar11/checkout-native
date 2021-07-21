import AsyncStorage from "@react-native-async-storage/async-storage";

class ProductsStorage {
    key = '@products';

    async deleteAll() {
        try {
            await AsyncStorage.removeItem(this.key)
        } catch (e) {
            console.error(e)
        }
    }

    async getAll() {
        try {
            const value = await AsyncStorage.getItem(this.key)
            return value != null ? JSON.parse(value) : null
        } catch (e) {
            console.error(e)
        }
    }

    async set(data) {
        if (data === null) return false;
        try {
            console.log('salvando ', this.key)
            const storageProducts = await AsyncStorage.getItem(this.key)

            if (storageProducts !== null)
                data.push(...JSON.parse(storageProducts));

            await AsyncStorage.setItem(this.key, JSON.stringify(data));
            console.log('salvo')
        } catch (e) {
            console.error(e)
        }

        return true;
    }
}

export default new ProductsStorage;

