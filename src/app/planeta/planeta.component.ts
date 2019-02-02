import { Component, Input } from '@angular/core';

@Component({
    selector: 'glx-planeta',
    templateUrl: './planeta.component.html'
})
export class PlanetaComponent {
    @Input() nomePlaneta = '';
    @Input() descricao = '';
    @Input() url = '';
}