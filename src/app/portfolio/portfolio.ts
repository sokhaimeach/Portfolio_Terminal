import { AfterViewInit, Component, ElementRef, HostListener, OnInit, signal, ViewChild } from '@angular/core';
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
  // language
  color = signal(['orange', ''])
  opacity = signal(['1', '0'])
  display = signal<'none' | 'block'>('none')
  hideDisplay = signal<'none' | 'block'>('block')
  isChange: boolean = false
  isProcess = signal<boolean>(false)
  count = signal<number>(0)
  @ViewChild('scroll') scroll!: ElementRef<HTMLElement>
  @ViewChild('store') store!: ElementRef<HTMLDivElement>
  @ViewChild('target') target!: ElementRef<HTMLElement>
  @ViewChild('test') test!: ElementRef<HTMLElement>
  @ViewChild('input') input!: ElementRef<HTMLInputElement>

  constructor(private ser: Service) { }
  ngOnInit() {
    this.data = this.ser.data()
  }
  ngAfterViewInit(): void {
    this.input.nativeElement.focus()
  }

  @HostListener('document:keydown', ['$event'])
  toggleLanguage(e: KeyboardEvent) {
    if (e.key == 'Tab') {
      e.preventDefault()
      this.tabToFill();
    }
    if (e.key === 'Enter') {
      this.checkCommand()
      e.preventDefault()
      if (this.color()[0] == 'orange' && this.inputKey == this.data.commands[9] && this.isChange) {
        setTimeout(() => {
          this.ser.setLang('en')
          this.data = this.ser.data()
        }, 4000)
        this.outputSetting()
        this.processing()
        this.isChange = false
      } else if (this.color()[0] == '' && this.inputKey == this.data.commands[9] && this.isChange) {
        setTimeout(() => {
          this.ser.setLang('km')
          this.data = this.ser.data()
        }, 4000)
        this.outputSetting()
        this.processing()
        this.isChange = false
      }
    }
    if (this.inputKey == this.data.commands[9] && this.display() == 'block') {
      this.isChange = true
      switch (e.key) {
        case 'ArrowUp': {
          e.preventDefault()
          this.color.set(['orange', ''])
          this.opacity.set(['1', '0'])
          break
        }
        case 'ArrowDown': {
          e.preventDefault()
          this.color.set(['', 'orange'])
          this.opacity.set(['0', '1'])
          break
        }
      }
    }
  }

  clickEnglish() {
    this.isChange = true
    this.checkCommand()
    this.color.set(['orange', ''])
    this.opacity.set(['1', '0'])
    if (this.color()[0] == 'orange' && this.inputKey == this.data.commands[9] && this.isChange) {
      setTimeout(() => {
        this.ser.setLang('en')
        this.data = this.ser.data()
      }, 4000)
      this.outputSetting()
      this.processing()
      this.isChange = false
    }
  }
  clickKhmer() {
    this.isChange = true
    this.checkCommand()
    this.color.set(['', 'orange'])
    this.opacity.set(['0', '1'])
    
      setTimeout(() => {
        this.ser.setLang('km')
        this.data = this.ser.data()
      }, 4000)
      this.outputSetting()
      this.processing()
      this.isChange = false
  }

  processing() {
    this.isProcess.set(true)
    this.CountProcessing()
    setTimeout(() => {
      this.isProcess.set(false)
    }, 4000)
  }

  CountProcessing() {
    if (this.count() < 100) {
      setTimeout(() => {
        this.count.set(this.count() + 10)
        this.CountProcessing()
      }, 300)
    } else {
      setTimeout(() => this.count.set(0), 1000)
    }
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
      case this.data.commands[9]: {
        this.display.set(this.display() == 'none' ? 'block' : 'none')
        this.hideDisplay.set(this.display() == 'none' ? 'block' : 'none')
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
    }, 30)
  }

  stoptyping() {
    if (this.timer) clearInterval(this.timer)
  }

  pushCommand(command: string) {
    this.store.nativeElement.insertAdjacentHTML('beforeend', `
      <div style="margin-bottom: 30px;">
        <div class="d-flex" style="height: fit-content; align-items: center;">
          <span class="fs-6 text-warning">~ ${this.data.profile.displayName}::Portfolio</span>
          <span class="text-warning" style="margin-top: 1px;">>></span>
          <span class="text-warning" style="font-size: 16px; padding: 0px 10px;">${this.inputKey}</span>
        </div>
        <pre style="border-left: 2px solid orange; padding-left: 15px; font-family: monospace; white-space: pre-wrap;">
          <span style="width: 400px">${command}</span>
        </pre>
      </div>
      `)
  }

  outputHelp() {
    let text = ''
    text = '\n' + (this.data.labels[0].key + '          - ' + this.data.labels[0].way + '\n')
      + (this.data.labels[1].key + '         - ' + this.data.labels[1].way + '\n')
      + (this.data.labels[2].key + '       - ' + this.data.labels[2].way + '\n')
      + (this.data.labels[3].key + '    - ' + this.data.labels[3].way + '\n')
      + (this.data.labels[4].key + '         - ' + this.data.labels[4].way + '\n')
      + (this.data.labels[5].key + '       - ' + this.data.labels[5].way + '\n')
      + (this.data.labels[6].key + '       - ' + this.data.labels[6].way + '\n')
      + (this.data.labels[7].key + '         - ' + this.data.labels[7].way + '\n')
      + (this.data.labels[8].key + '          - ' + this.data.labels[8].way + '\n')
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
      text += (item.id + '.      ' + item.title + '\n'
        + '        Description    ' + item.summary + '\n'
        + '        Tech           ' + item.tech + '\n'
        + `        Link           ` + item.links[0].url + '\n\n')
      html += (item.id + '.      ' + item.title + '\n'
        + '        Description    ' + item.summary + '\n'
        + '        Tech           ' + item.tech + '\n'
        + `        Link           <a href="${item.links[0].url}">` + item.links[0].url + '</a>\n\n');
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
    text += ('=== ' + this.data.contact.title + ' ===\n\n'
      + this.data.contact.e_title + ' : ' + this.data.contact.email + '\n'
      + this.data.contact.p_title + ' : ' + this.data.contact.phone + '\n'
      + this.data.contact.t_title + ' : ' + this.data.contact.telegram + '\n'
      + this.data.contact.a_title + ' : ' + this.data.contact.location + '\n')
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
        this.scrollToBottom()
      } else {
        if (this.timer) clearInterval(this.timer)
        this.store.nativeElement.insertAdjacentHTML('beforeend', `
        <div style="margin-bottom: 30px;">
          <div class="d-flex" style="height: fit-content; align-items: center;">
            <span class="fs-6 text-warning">~ ${this.data.profile.displayName}::Portfolio</span>
            <span class="text-warning" style="margin-top: 1px;">>></span>
            <span class="text-warning" style="font-size: 16px; padding: 0px 10px;">${this.inputKey}</span>
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
    }, 50)
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

  outputSetting() {
    this.store.nativeElement.insertAdjacentHTML('beforeend', `
      <div style="margin-bottom: 30px;">
        <div class="d-flex" style="height: fit-content; align-items: center;">
            <span class="fs-6 text-warning">~ ${this.data.profile.displayName}::Portfolio</span>
            <span class="text-warning" style="margin-top: 1px;">>></span>
            <span class="text-warning" style="font-size: 16px; padding: 0px 10px;">${this.inputKey}</span>
          </div>
        <div style="border-left: 2px solid orange; padding-left: 15px;">
          <div class="setting">
                <span>Languages</span>
                <div class="language ms-2">
                    <i class="bi bi-caret-right-fill" style="font-size: small; opacity: ${this.opacity()[0]}; color: ${this.color()[0]};"></i>
                    <span class="ms-1 fs-6" style="color: ${this.color()[0]};">English</span>
                </div>
                <div class="language ms-2">
                    <i class="bi bi-caret-right-fill" style="font-size: small; opacity: ${this.opacity()[1]}; color: ${this.color()[1]};"></i>
                    <span class="ms-1 fs-6" style="color: ${this.color()[1]};">Khmer</span>
                </div>
            </div>
        </div>
      </div>
      `)
    this.scrollToBottom()
    this.inputKey = ''
    this.input.nativeElement.value = ''
  }
}
