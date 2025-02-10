import { Directive, HostBinding, HostListener, } from "@angular/core";

@Directive({
    selector: '[red]',
    standalone: true,
})
export class RedDirective {

    color = 'white';
    textTransform = 'lowercase'

    @HostBinding('style.backgroundColor')
    get backgroundColor() {
        return this.color;
    };

    @HostBinding('style.textTransform')
    get  textTransformGetter() {
        return this.textTransform;
    };
  

    @HostListener('mouseenter')
    enter() {
        this.color = 'yellow';
        this.textTransform = 'uppercase'
       
    }

    @HostListener('mouseleave')
    leave() {
        this.color = '';
        this.textTransform = 'lowercase'
        console.log('white');
    }

}