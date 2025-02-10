import { Directive, HostBinding, HostListener } from "@angular/core";

@Directive({
    selector: '[appHighlight]',
    standalone: true,
  })
  export class HighlightDirective {
    color = ' #4B565E';
    textTransform = ''

    @HostBinding('style.backgroundColor')
    get backgroundColor() {
        return this.color;
    };

    @HostBinding('style.textTransform')
    get  textTransformGetter() {
        return this.textTransform;
    };

    @HostListener('mouseenter')
    onMouseEnter() {
        this.color = '#F0BA4E';
        this.textTransform = 'uppercase'
    } 

    @HostListener('mouseleave')
    onMouseLeave() {
        this.color = '';
        this.textTransform = ''

    }
  }