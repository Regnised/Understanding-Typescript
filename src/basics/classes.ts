abstract class Department {
    static year = 2024;
    protected employees: string[] = [];

    constructor(protected readonly id: string, private name: string) {}

    static createEmployee(name: string) {
        return {
            name,
        };
    }

    abstract describe(this: Department): void;

    addEmployee(employee: string) {
        // validation
        this.employees.push(employee);
    }

    printEmployeeInfo() {
        console.log(this.employees);
    }
}

class ITDepartment extends Department {
    constructor(id: string, public admins: string[]) {
        super(id, 'IT');
        this.admins = admins;
    }

    describe(): void {
        console.log(`IT Department: ${this.id}`);
    }
}

class AccountingDepartment extends Department {
    private lastReport: string;
    private static instance: AccountingDepartment;

    get mostRecentReport() {
        if (this.lastReport) {
            return this.lastReport;
        }
        throw new Error('No reports');
    }

    set mostRecentReport(report: string) {
        if (!report) {
            throw new Error('Please set the report argument');
        }
        this.addReport(report);
    }

    private constructor(id: string, private reports: string[]) {
        super(id, 'Accounting');
        this.lastReport = reports[0];
    }

    static getInstance() {
        if (AccountingDepartment.instance) {
            return this.instance;
        }
        this.instance = new AccountingDepartment('ID', []);
        return this.instance;
    }

    describe() {
        console.log(`Accounting department: ${this.id}`);
    }

    addEmployee(name: string) {
        this.employees.push(name);
    }

    addReport(text: string) {
        this.reports.push(text);
        this.lastReport = text;
    }

    printReports() {
        console.log(this.reports);
    }

    printEmployeeInfo() {
        console.log(this.employees);
    }
}

const employee1 = Department.createEmployee('Oleg');
console.log(employee1, Department.year);

const it = new ITDepartment('it-2', ['Max']);
console.log(it);
console.log(it.describe());

const accounting = AccountingDepartment.getInstance();
const accounting2 = AccountingDepartment.getInstance();

accounting.describe();
accounting2.describe();

accounting.addReport('Some report');
accounting.printReports();

accounting.mostRecentReport = 'Year end report';
console.log(accounting.mostRecentReport);

accounting.addEmployee('Vasyl');
console.log(accounting.printEmployeeInfo());

// const accountingCopy = { name: '', describe: accounting.describe };

// accountingCopy.describe();

it.addEmployee('Max');
it.addEmployee('Vasyl 2');
// accounting.employees.push('qwe');

console.log(it.printEmployeeInfo());
