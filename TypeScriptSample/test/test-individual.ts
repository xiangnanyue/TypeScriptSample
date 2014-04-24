﻿import individual = require('../individual');
import assert = require('assert');

describe("employee", () => {
    describe("getOrganization(string)", () => {
        it('should return a team', () => {
            var employee = new individual.Employee("Jean", "Martin");
            var team = { name: "test", type: "tutu", id: 1, main: true, manager: null };
            employee.organizations.push(team);
            var team2 = { name: "test2", type: "tutu", id: 2, main: true, manager: null };
            assert.equal(team, employee.getNode('test'));
            assert.equal(team, employee.getNode(1));
            var nodeQuery: individual.NodeQuery = employee;
            nodeQuery.getNodesByType("team")[0].manager;
        })
    });
});