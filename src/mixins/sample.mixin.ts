import { SampleService } from '@/services';
import { Vue, Component } from 'vue-property-decorator';

@Component
export class SampleMixin extends Vue {
  get items() {
    return SampleService.getItems();
  }
}
