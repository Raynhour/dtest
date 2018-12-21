let expect = require('chai').expect;
let assert = require('chai').assert;

import FieldsValidator from "./fields_validator";

let v = new FieldsValidator({
    title: "",
    handle: "",
    descr: ""
});

beforeEach('Setting up the userList', function(){
    v.reset();
  });


describe('Проверяем валидацию validateStrMinLen', _ => {
    it('пустая строка нулевой длины', () => {
        v.validateStrMinLen("title", "", 0, "Пустая строка");
        expect(v.isFieldValid("title")).to.be.true;
    });
    
    it('Строка с правильно проставленной минимальной длиной', () => {
        v.validateStrMinLen("title", "123", 3, "Правильная строка");
        expect(v.isFieldValid("title")).to.be.true;
        v.validateStrMinLen("title", "12345", 5, "Правильная строка");
        expect(v.isFieldValid("title")).to.be.true;
        v.validateStrMinLen("title", "1234567", 7, "Правильная строка");
        expect(v.isFieldValid("title")).to.be.true;
    });

    it('Строка с не правильно проставленной минимальной длиной', () => {
        v.validateStrMinLen("title", "123", 4, "Правильная строка");
        expect(v.isFieldValid("title")).to.be.false;
        v.validateStrMinLen("title", "12345", 6, "Правильная строка");
        expect(v.isFieldValid("title")).to.be.false;
        v.validateStrMinLen("title", "1234567", 8, "Правильная строка");
        expect(v.isFieldValid("title")).to.be.false;
    });
})

describe('Проверяем валидацию validateStrMaxLen', _ => {
    it('пустая строка нулевой длины', () => {
        v.validateStrMaxLen("title", "", 0, "Пустая строка");
        expect(v.isFieldValid("title")).to.be.true;
    });
    
    it('Строка с правильно проставленной максимальной длиной', () => {
        v.validateStrMaxLen("title", "123", 3, "Правильная строка");
        expect(v.isFieldValid("title")).to.be.true;
        v.validateStrMaxLen("title", "12345", 5, "Правильная строка");
        expect(v.isFieldValid("title")).to.be.true;
        v.validateStrMaxLen("title", "1234567", 7, "Правильная строка");
        expect(v.isFieldValid("title")).to.be.true;
    });

    it('Строка с не правильно проставленной максимальной длиной', () => {
        v.validateStrMaxLen("title", "123456", 4, "Не правильная строка");
        expect(v.isFieldValid("title")).to.be.false;
        v.validateStrMaxLen("title", "1234567", 6, "Не правильная строка");
        expect(v.isFieldValid("title")).to.be.false;
        v.validateStrMaxLen("title", "123456789", 8, "Не правильная строка");
        expect(v.isFieldValid("title")).to.be.false;
    });
})

describe('Проверяем валидацию validateStrLenRange', _ => {
    it('пустая строка нулевой длины', () => {
        v.validateStrLenRange("title", "", 0, 1, "Пустая строка");
        expect(v.isFieldValid("title")).to.be.true;
    });

    it('Строка с правильно проставленной максимальной длиной', () => {
        v.validateStrLenRange("title", "322", 0, 100, "Правильная строка");
        expect(v.isFieldValid("title")).to.be.true;
        v.validateStrLenRange("title", "12345", 5, 9, "Правильная строка");
        expect(v.isFieldValid("title")).to.be.true;
        v.validateStrLenRange("title", "12", 0, 2, "Правильная строка");
        expect(v.isFieldValid("title")).to.be.true;
    });

    it('Строка с не правильной проставленной максимальной длиной', () => {
        v.validateStrLenRange("title", "322", 2, 4, "Не правильная строка");
        expect(v.isFieldValid("title")).to.be.true;
        v.validateStrLenRange("title", "12345", 5, 9, "Не правильная строка");
        expect(v.isFieldValid("title")).to.be.true;
        v.validateStrLenRange("title", "12", 0, 2, "Не правильная строка");
        expect(v.isFieldValid("title")).to.be.true;
    });
})