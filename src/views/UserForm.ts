import {View} from "./View";
import {User, UserProps} from "../models/User";

export class UserForm extends View<User, UserProps> {

    eventsMap(): { [key: string]: () => void } {
        return {
            'mouseenter:h1': this.onHeaderHover,
            'click:.set-age': this.onSetAgeClick,
            'click:.set-name': this.onSetNameClick,
            'click:.save-model': this.onSaveClick
        }
    }

    onSaveClick = () => {
        this.model.save()
    }

    onSetNameClick = (): void => {
        const input = this.parent.querySelector('input')
        if(input) {
            const name = input.value
            this.model.set({ name })
        }
    }

    onSetAgeClick = (): void => {
        this.model.setRandomAge()
    }

    onHeaderHover(): void {
        console.log('h1 hovered')
    }

    template(): string {
        return `
        <div>
          <input placeholder="${this.model.get('name')}" />
          <button class="set-name">Change name</button>
          <button class="set-age">Set random age</button>
          <button class="save-model">Save user</button>
        </div>
        `
    }


}
