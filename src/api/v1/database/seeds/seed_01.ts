import { Knex } from "knex";

export async function seed(knex: Knex): Promise<void> {
    // Deletes ALL existing entries
    await knex("users").del();
    await knex("products").del();

    // Inserts seed entries
    await knex("users").insert([
        { id : "1", first_name: "example first name 1" , last_name: "example last name 1"},
        { id: "2", first_name: "example first name 2" , last_name: "example last name 2"},
        { id: "3", first_name: "example first name 3" , last_name: "example last name 3"},
    ]);
    await knex('products').insert([
        { id : "1", price: 200 , name: "example last name 1"},
        { id: "2", price: 300 , name: "example last name 2"},
        { id: "3", price: 400.3 , name: "example last name 3"},
    ])
};
