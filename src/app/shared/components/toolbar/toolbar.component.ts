import { MatIconModule } from '@angular/material/icon';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import {MatToolbarModule} from '@angular/material/toolbar';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-toolbar',
    standalone: true,
    imports: [
        CommonModule,
        MatIconModule,
        MatToolbarModule
    ],
    templateUrl: './toolbar.component.html',
    styleUrl: './toolbar.component.css',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ToolbarComponent { }
