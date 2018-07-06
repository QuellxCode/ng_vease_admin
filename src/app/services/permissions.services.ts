import { EventEmitter, Injectable } from '@angular/core';

@Injectable()

export class PermissionService {
    public permissions = [];
    public permissionRemoved = new EventEmitter();
    removePermission(rand_id) {
        for (var i = 0; i < this.permissions.length; i += 1) {
            if (this.permissions[i]['rand_id'] === rand_id) {
                this.permissions.splice(i, 1);
                this.permissionRemoved.emit(rand_id);
            }
        }
    }

    getPermissions() {
        return this.permissions;
    }
}
