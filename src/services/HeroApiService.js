//import React from 'react';
import fetch from 'node-fetch';

import MessageService from './MessageService';

export default class HeroApiService {
    static url = "http://localhost:8080/api/heroes";

    /** Log a HeroService message with the MessageService */
    static log(message) {
       MessageService.add(`HeroService: ${message}`); 
    }

    // Query
    static async list() {
        HeroApiService.log('fetched heroes');
        let res = await fetch(HeroApiService.url);
        let heroes = await res.json();
     
        return heroes;
    }

    // Read
    static async get(id) {
        HeroApiService.log(`fetched hero id=${id}`);
        let res = await fetch(HeroApiService.url + "/" + id);
        return await res.json();
    }

    // Search term
    static async search(term) {
        HeroApiService.log(`Search heroes matching "${term}"`);
        let res = await fetch(HeroApiService.url + "?name=" + term);
        return await res.json();
    }
    
    // Create
    static async post(hero) {
        HeroApiService.log(`added hero w/ id=${hero.id}`);
        let res = await fetch(HeroApiService.url, {
            method: 'post',
            body:    JSON.stringify(hero),
            headers: { 'Content-Type': 'application/json' },
        });
        return await res.json();
    }

    // Update
    static async put(hero) {
        HeroApiService.log(`updated hero id=${hero.id}`);
        let res = await fetch(HeroApiService.url, {
            method: 'put',
            body:    JSON.stringify(hero),
            headers: { 'Content-Type': 'application/json' },
        });
        return await res.json();
    }

    // Delete
    static async delete(id) {
        HeroApiService.log(`deleted hero id=${id}`);
        let res = await fetch(HeroApiService.url + "/" + id, {
            method: 'delete',
            headers: { 'Content-Type': 'application/json' },
        });
        return await res.json();
    }
}