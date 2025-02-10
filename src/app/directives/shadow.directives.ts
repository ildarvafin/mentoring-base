import { Directive, HostBinding, HostListener } from "@angular/core";

@Directive({
    selector: '[appShadow]',
    standalone: true,
})
export class ShadowDirective {
    @HostBinding('style.boxShadow') 
    boxShadow = '';


@HostListener('mouseenter')
    enter() {
        this.boxShadow = '0 8px 10px rgba(0, 0, 0, 0.3)';
    }

@HostListener('mouseleave')
    leave() {
        this.boxShadow = '';
    }
}
