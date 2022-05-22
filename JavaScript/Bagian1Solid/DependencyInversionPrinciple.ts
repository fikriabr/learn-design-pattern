interface Connection {
    isConnected(): boolean;
    switching(): void;
}

interface ConnectionAction {
    connecting(): void;
    disconnecting(): void;
}

class DatabaseConnection implements Connection {
    action: ConnectionAction
    connected: boolean
    constructor(action: ConnectionAction) {
        this.action = action
        this.connected = false
    }
    isConnected(): boolean {
        return this.connected
    }
    switching(): void {
        const checkConnected = this.isConnected()
        if (checkConnected) {
            this.action.disconnecting()
            this.connected = false
        } else {
            this.action.connecting()
            this.connected = true
        }
    }
}

class MySQL implements ConnectionAction {
    connecting(): void {
        console.log("MySQL is connected")
    }
    disconnecting(): void {
        console.log("MySQL is disconnected")
    }
}

class SQLServer implements ConnectionAction {
    connecting(): void {
        console.log("SQLServer is connected")
    }
    disconnecting(): void {
        console.log("SQLServer is disconnected")
    }
}

const mySQLInstance: ConnectionAction = new MySQL()
const dbConnection1: Connection = new DatabaseConnection(mySQLInstance)
dbConnection1.switching()
dbConnection1.switching()

const sqlServerInstance: ConnectionAction = new SQLServer()
const dbConnection2: Connection = new DatabaseConnection(sqlServerInstance)
dbConnection2.switching()
dbConnection2.switching()
