import { Vue, Component } from 'vue-property-decorator'
import { bind } from  '@packages/index.ts'

@Component({
  name: 'simple',
})
export default class PageSimple extends Vue {
  mounted() {
    console.log(bind)
  }
}
