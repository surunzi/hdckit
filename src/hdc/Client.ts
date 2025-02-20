import { ClientOptions } from '../ClientOptions'
import Connection from './Connection'

export default class Client {
  options: ClientOptions
  constructor(
    { host = '127.0.0.1', port = 8710 }: ClientOptions = { port: 5037 }
  ) {
    this.options = { host, port }
  }
  connection() {
    const connection = new Connection(this.options)
    return connection.connect()
  }
  listTargets() {
    this.connection()
  }
}
