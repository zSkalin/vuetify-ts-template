import { IUser } from '@/interfaces';
import { ApiService, JWTService } from '@/services';
import store from '@/store';
import { Module, VuexModule, Mutation, Action, getModule } from 'vuex-module-decorators';

@Module({
  namespaced: true,
  name: 'Auth',
  store,
  dynamic: true,
})
class AuthStoreModule extends VuexModule {
  private authenticated = !!JWTService.getToken();
  private user: IUser | null = null;

  // Getters
  get isAuthenticated() {
    return this.authenticated;
  }
  get currentUser(): IUser | null {
    if (this.user) {
      return this.user;
    }
    return null;
  }

  // Actions
  // rawError outputs the thrown error from awaited function
  @Action({ rawError: true })
  async init() {
    if (this.isAuthenticated) {
      const token = localStorage.getItem('token');
      if (token) {
        // Sets the token for all Axios requests
        ApiService.setAuthHeader(token);
      }
    }
    return;
  }
  @Action({ rawError: true })
  async logout() {
    this.PURGE_AUTH();
  }

  // Mutations
  @Mutation
  SET_AUTH(data) {
    this.authenticated = true;
    this.user = data.user;
    JWTService.saveToken(data.token);
  }
  @Mutation
  SET_USER(user: IUser) {
    this.user = user;
  }
  @Mutation
  PURGE_AUTH() {
    this.authenticated = false;
    this.user = null;
    JWTService.destroyToken();
  }
}

export const AuthStore = getModule(AuthStoreModule);
