import { AfterViewInit, Component, ElementRef, OnInit, signal, ViewChild } from '@angular/core';
import { Service } from '../shared/service.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-portfolio',
  imports: [FormsModule],
  templateUrl: './portfolio.html',
  styleUrl: './portfolio.css'
})
export class Portfolio implements OnInit, AfterViewInit {
  data: any
  timer: any
  inputKey: string = ''
  storeCommands: any[] = []
  border = signal('none')

  @ViewChild('scroll') scroll!: ElementRef<HTMLElement>
  @ViewChild('store') store!: ElementRef<HTMLDivElement>
  @ViewChild('target') target!: ElementRef<HTMLElement>
  @ViewChild('test') test!: ElementRef<HTMLElement>
  @ViewChild('input') input!: ElementRef<HTMLInputElement>

  constructor(private ser: Service) {}
  ngOnInit() {
    this.ser.setLang('en')
    this.data = this.ser.data()
  }
  ngAfterViewInit(): void {
    this.input.nativeElement.focus()
    this.input.nativeElement.addEventListener('keydown', (e: KeyboardEvent) => {
      const key = e.key
      
      if (key == 'Tab') {
        e.preventDefault()
        this.tabToFill();
      }
      if (key == 'Enter') {
        this.checkCommand();
      }
    })
  }

  scrollToBottom() {
    const el = this.scroll.nativeElement
    el.scrollTop = el.scrollHeight
  }

  checkCommand(): void {
    switch (this.inputKey) {
      case this.data.commands[0]: {
        this.outputHelp()
        break
      }
      case this.data.commands[1]: {
        this.outputAbout()
        break
      }
      case this.data.commands[2]: {
        this.outputProject()
        break
      }
      case this.data.commands[3]: {
        this.outputExperience()
        break
      }
      case this.data.commands[4]: {
        this.outputSkills()
        break
      }
      case this.data.commands[5]: {
        this.outputContact()
        break
      }
      case this.data.commands[6]: {
        this.outputProfile()
        break
      }
      case this.data.commands[7]: {
        this.store.nativeElement.textContent = ''
        this.input.nativeElement.value = ''
        break
      }
      case this.data.commands[8]: {
        window.close()
        break
      }
      default: {
        this.outputDefault()
        break
      }
    }
  }

  typing(content: string, html: string) {
    this.border.set('2px solid orange')
    this.stoptyping()
    this.target.nativeElement.textContent = ''

    let i = 0
    this.timer = setInterval(() => {
      if (i < content.length) {
        this.target.nativeElement.textContent += content[i++]
      } else {
        this.stoptyping()
        this.pushCommand(html)
        this.inputKey = ''
        this.input.nativeElement.value = ''
        this.target.nativeElement.textContent = ''
        this.border.set('none')
      }
      this.scrollToBottom()
    }, 10)
  }

  stoptyping() {
    if (this.timer) clearInterval(this.timer)
  }

  pushCommand(command: string) {
    this.store.nativeElement.insertAdjacentHTML('beforeend', `
      <div style="margin-bottom: 30px;">
        <div class="d-flex text-warning" style="height: fit-content; align-items: center;">
          <span class="fs-6">~ ${this.data.profile.displayName}</span>
          <span style="margin-top: 1px;">>></span>
          <span type="text" style="font-size: 16px; padding: 0px 10px;">${this.inputKey}</span>
        </div>
        <pre style="border-left: 2px solid orange; padding-left: 15px; font-family: monospace; white-space: pre-wrap;">
          <span style="width: 400px">${command}</span>
        </pre>
      </div>
      `)
  }

  outputHelp() {
    let text = ''
    text = '\n' + (this.data.labels[0].key + '               - ' + this.data.labels[0].way + '\n')
      + (this.data.labels[1].key + '             - ' + this.data.labels[1].way + '\n')
      + (this.data.labels[2].key + '           - ' + this.data.labels[2].way + '\n')
      + (this.data.labels[3].key + '     - ' + this.data.labels[3].way + '\n')
      + (this.data.labels[4].key + '                 - ' + this.data.labels[4].way + '\n')
      + (this.data.labels[5].key + '           - ' + this.data.labels[5].way + '\n')
      + (this.data.labels[6].key + '            - ' + this.data.labels[6].way + '\n')
      + (this.data.labels[7].key + '               - ' + this.data.labels[7].way + '\n')
      + (this.data.labels[8].key + '                 - ' + this.data.labels[8].way + '\n')
    const html = text
    this.typing(text, html)
  }

  outputAbout() {
    let text = '\n'
    for (let i = 0; i < this.data.about.length; i++) {
      if (i < this.data.about.length - 1)
        text += this.data.about[i] + '\n'
      else text += this.data.about[i]
    }
    const html = text
    this.typing(text, html)
  }

  outputProject() {
    let text = '\n'
    let html = '\n'
    this.data.projects.forEach((item: any) => {
      text += (item.id + '.     ' + item.title + '\n'
        + '        Description    ' + item.summary + '\n'
        + '        Tech                ' + item.tech + '\n'
        + `        Link                 ` + item.links[0].url + '\n\n')
      html += (item.id + '.     ' + item.title + '\n'
        + '        Description    ' + item.summary + '\n'
        + '        Tech                ' + item.tech + '\n'
        + `        Link                 <a href="${item.links[0].url}">` + item.links[0].url + '</a>\n\n');
    });
    this.typing(text, html)
  }

  outputExperience() {
    let text = '\n'
    this.data.experience.forEach((ex: any) => {
      text += '=== ' + ex.title + ' ===\n\n'
        + ex.discription + '\n\n'
    });
    const html = text
    this.typing(text, html)
  }

  outputSkills() {
    let text = '\n'
    this.data.skills.forEach((sk: any) => {
      text += '=== ' + sk.name + ' ===\n\n'
        + sk.items + '\n\n'
    });
    const html = text
    this.typing(text, html)
  }

  outputContact() {
    let text = '\n'
    let html = ''
    text += ('=== FEEL FREE TO CONTACT ME ===\n\n'
      + 'Email : ' + this.data.contact.email + '\n'
      + 'Phone number : ' + this.data.contact.phone + '\n'
      + 'Telegram : ' + this.data.contact.telegram + '\n'
      + 'Address : ' + this.data.contact.location + '\n')
    html += (text
      + this.data.contact.socials[0].label + ` : <a href="${this.data.contact.socials[0].url}">View My Account</a>\n`
      + this.data.contact.socials[1].label + ` : <a href="${this.data.contact.socials[1].url}">View My Account</a>\n`
    )
    text += this.data.contact.socials[0].label + ' : View My Account\n'
      + this.data.contact.socials[1].label + ' : View My Account\n'

    this.typing(text, html)
  }

  outputProfile() {
    let text = '\n'
    text += '=== ' + this.data.profile.displayName + ' ===\n\n' + this.data.profile.greeting + '\n\n'
      + this.data.profile.discription
    const html = text
    this.typing(text, html)
  }

  outputDefault() {
    if (this.timer) clearInterval(this.timer)
    this.target.nativeElement.textContent = '\n'
    this.target.nativeElement.style.color = 'red'
    this.target.nativeElement.style.fontSize = '30px'

    let i = 0
    this.timer = setInterval(() => {
      if (i < this.data.default.length) {
        this.target.nativeElement.textContent += this.data.default[i++]
      } else {
        if (this.timer) clearInterval(this.timer)
        this.store.nativeElement.insertAdjacentHTML('beforeend', `
        <div style="margin-bottom: 30px;">
          <div class="d-flex text-warning" style="height: fit-content; align-items: center;">
            <span class="fs-6">~ ${this.data.profile.displayName}</span>
            <span style="margin-top: 1px;">>></span>
            <span type="text" style="font-size: 16px; padding: 0px 10px;">${this.inputKey}</span>
          </div>
          <pre style="border-left: 2px solid orange; padding-left: 15px; font-family: monospace; white-space: pre-wrap;">
            <span style="width: 400px; color: red; font-size: 30px;">${'\n' + this.data.default}</span>
          </pre>
        </div>
        `)
        this.inputKey = ''
        this.input.nativeElement.value = ''
        this.target.nativeElement.textContent = ''
        this.target.nativeElement.style.color = ''
        this.target.nativeElement.style.fontSize = ''
      }
    }, 10)
  }

  tabToFill() {
    for (let j = 0; j < this.data.commands.length; j++) {
      let fromInput = ''
      let formCommands = ''
      let com = this.data.commands[j]
      for (let i = 0; i < this.inputKey.length; i++) {
        fromInput += this.inputKey[i]
        formCommands += com[i]
      }
      if (fromInput == formCommands) {
        this.inputKey = com
        this.input.nativeElement.value = com
        break
      }
    }
    this.input.nativeElement.focus()
  }
}
