import { EventEmitter, Injectable } from '@angular/core';

@Injectable()

export class PermissionService {
    public permissions = [];
// public permissionAdded = new EventEmitter();
public permissionRemoved = new EventEmitter();
// public permissionUpdated = new EventEmitter();
// addPermission(permission) {
// this.permissions.push(permission);
// this.permissionAdded.emit(permission);
// }

removePermission(rand_id) {
for(var i = 0; i < this.permissions.length; i += 1) {
                if(this.permissions[i]['rand_id'] === rand_id) {
                    this.permissions.splice(i, 1);
                    this.permissionRemoved.emit(rand_id);
                }
            }
    // const index = this.permissions.indexOf(permission);
    //     this.permissions.splice(index, 1);
    //     this.permissionRemoved.emit(permission);
}

getPermissions() {
    return this.permissions;
}
}
