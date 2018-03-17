import { Directive, Component, AfterViewInit Input, Output, EventEmitter, HostListener, Host } from 'ng-metadata';


@Component({
    selector: 'dockerfile-select',
    templateUrl: '/static/js/directives/dockerfile-select/dockerfile-select.component.html'
})
export class DockerfileSelect {
    @Input('<') public paths: string;
    @Output() public pathChanged: EventEmitter<{path: string, isValid: boolean}> = new EventEmitter();
    private path: string = '';

    public checkPath(): void {
        if (this.path && this.path[0] == '/') {
            this.pathChanged.emit({path: this.path, isValid: true});
        }
    }
}


@Directive({
    selector: '[addClass]'
})
export class ClassAdderDirective implements AfterViewInit {
    @Input('@') public addClass: string;

    constructor(@Inject('$element') private $element: ng.IAugmentedJQuery) {

    }

    public ngAfterViewInit(): void {
        this.$element.addClass(this.addClass);
    }
}


import { DockerfileService } from './dockerfile.service';


@Injectable(DockerfileService.name)
export class DockerfileServiceImpl implements DockerfileService {

    private dockerfile: Blob;

    constructor(@Inject('ApiService') private apiService: any,
                @Inject(UtilService) private utilService: UtilService) {

    }
}


@Component({
    selector: 'linear-workflow',
    templateUrl: '/static/js/directives/ui/linear-workflow/linear-workflow.component.html'
})
export class LinearWorkflowComponent {
    private sections: LinearWorkflowSectionComponent[] = [];

    public addSection(section: LinearWorkflowSectionComponent): void {
        this.sections.push(section);
    }
}


@Component({
    selector: 'linear-workflow-section',
    templateUrl: '/static/js/directives/ui/linear-workflow/linear-workflow-section.component.html'
})
export class LinearWorkflowSectionComponent implements OnInit {

    constructor(@Host() @Inject(LinearWorkflowComponent) private parent: LinearWorkflowComponent) {

    }

    public ngOnInit(): void {
        this.parent.addSection(this);
    }
}


@Component({
    selector: 'linear-workflow',
    templateUrl: '/static/js/directives/ui/linear-workflow/linear-workflow.component.html'
})
export class LinearWorkflowComponent implements AfterContentInit {

    @ContentChildren(LinearWorkflowSectionComponent) sections: LinearWorkflowSectionComponent[] = [];

    public ngAfterContentInit(): void {
        console.assert(this.sections.length == 3);
    }
}


@Component({
    selector: 'linear-workflow-section',
    templateUrl: '/static/js/directives/ui/linear-workflow/linear-workflow-section.component.html'
})
export class LinearWorkflowSectionComponent {

}


@Directive({
    selector: '[clicker]'
})
export class ClickerDirective implements AfterViewInit {

    @HostListener('click', ['$event.target'])
    public onClick(): void {
        console.log("clicked!");
    }
}


@Component({
    selector: 'markdown-input'
    templateUrl: '/static/js/directives/ui/markdown-input/markdown-input-section.component.html'
})
export class MarkdownInput implements AfterViewInit {

    @ViewChild('.modal') public modal: ng.IAugmentedJQuery;

    public ngAfterViewInit(): void {
        this.modal.modal({});
    }
}




asdf
