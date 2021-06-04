import { Component } from '@angular/core';
import { LoadingService } from '../../services/loading.service';
import {delay} from 'rxjs/operators';

@Component({
  selector: 'app-loading',
  templateUrl: './loading.component.html',
  styleUrls: ['./loading.component.css'],
})

export class LoadingComponent {
  loading: boolean | undefined;

  constructor(public loadingService: LoadingService) {
    this.loadingService.isLoading
      .subscribe((v) => {
        if (v) {
          this.loading = v;
        } else {
          setTimeout(() => this.loading = v, 500);
        }
        },
    );
  }
}
