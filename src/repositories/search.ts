import Theater from "../models/theater";

export default class SearchTheater {
    private theathers: Theater[] = [
        new Theater(1, "Theater1", "Address A", "City A", "zipcode1", "phonenumber1", "http://theaters.example.com/theater1", {"latitude": 0, "longitude": 0}),
        new Theater(2, "Theater2", "Address B", "City B", "zipcode2", "phonenumber2", "http://theaters.example.com/theater2", {"latitude": 0, "longitude": 0}),
        new Theater(3, "Theater3", "Address C", "City C", "zipcode3", "phonenumber3", "http://theaters.example.com/theater3", {"latitude": 0, "longitude": 0}),
    ];

    public findByCity(city: string): Theater | void{
        for (let t of this.theathers) {
            if (t.city === city) {
                return t;
            }
        }
    }
}
