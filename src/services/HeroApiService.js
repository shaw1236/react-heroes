//import React from 'react';
import fetch from 'node-fetch';

export default class HeroApiService {
    static url = "http://localhost:8080/api/heroes";

    // Query
    static async list() {
        let res = await fetch(HeroApiService.url);
        let heroes = await res.json();
     
        return heroes;
    }

    // Read
    static async get(id) {
        let res = await fetch(HeroApiService.url + "/" + id);
        return await res.json();
    }

    // Search term
    static async search(term) {
        let res = await fetch(HeroApiService.url + "?name=" + term);
        return await res.json();
    }
    
    // Create
    static async post(hero) {
        let res = await fetch(HeroApiService.url, {
            method: 'post',
            body:    JSON.stringify(hero),
            headers: { 'Content-Type': 'application/json' },
        });
        return await res.json();
    }

    // Update
    static async put(hero) {
        let res = await fetch(HeroApiService.url, {
            method: 'put',
            body:    JSON.stringify(hero),
            headers: { 'Content-Type': 'application/json' },
        });
        return await res.json();
    }

    // Delete
    static async delete(id) {
        let res = await fetch(HeroApiService.url + "/" + id, {
            method: 'delete',
            headers: { 'Content-Type': 'application/json' },
        });
        return await res.json();
    }
}