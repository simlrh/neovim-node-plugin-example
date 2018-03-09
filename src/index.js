import { Plugin, Function, AutoCommand, Command } from 'neovim';

@Plugin({ dev: true })
export default class TestPlugin {
  constructor(nvim) {
    this.nvim = nvim;
  }

  @Function('Vsplit', { sync: true })
  splitMe(args, done) {
    this.nvim.command('vsplit');
  }

  @Command('LongCommand')
  async longCommand(args) {
    console.log('Output will be routed to $NVIM_NODE_LOG_FILE');
    const bufferName = await this.nvim.buffer.name;
    return bufferName;
  }

  @Command('UsePromises')
  promiseExample() {
    return this.nvim.buffer.name.then((name) => {
      console.log(`Current buffer name is ${name}`);
    });
  }
}
