let car = (name, model, year, owner, ownerPhone, img) => ({name, model, year, owner, ownerPhone, img});
let log = (text, type, date = new Date()) => ({text, type, date});

const cars = [
    car('BMW', 'X6', 2015, 'Alex', '+77777777771', 'img/bmw.jpg'),
    car('Cooper', 'Mini', 2017, 'Anna', '+77777777772', 'img/cooper.jpg'),
    car('Mersedes', 'Benz', 2000, 'John', '+77777777773', 'img/mersedes.jpg')
];

new Vue({
    el: '#app',
    data: {
        cars: cars,
        car: cars[0],
        logs: [],
        selectedCarIndex: 0,
        phoneShowed: false,
        inputValue: '',
        modalShowed: false
    },
    methods: {
        selectCar(i) {
            // console.log(index);
            this.car = cars[i];
            this.selectedCarIndex = i;
            this.phoneShowed = false;
        },
        newOrder() {
            this.modalShowed = false;
            this.logs.push(log(`Success order: ${this.car.name} - ${this.car.model}`, 'ok'));
            // console.log(this.logs);
        },
        cancelOrder() {
            this.modalShowed = false;
            this.logs.push(log(`Cancelled order: ${this.car.name} - ${this.car.model}`, 'cnl'));
        }
    },
    // вычисленные переменные, которые зависят от определенных свойств
    computed: {
        phoneBtnText() {
            return this.phoneShowed ? 'Hide phone' : 'Show phone';
        },
        filteredCars() {
            return this.cars.filter(car => {
                return car.name.indexOf(this.inputValue) > -1 || car.model.indexOf(this.inputValue) > -1
            });
        }
    },
    filters: {
        date(val) {
            return val.toLocaleString();
        }
    }
});