<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Spatie\Permission\Models\Role;
use Spatie\Permission\Models\Permission;

class RolesAndPermissionsSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        //
        // Reset cached roles and permissions
        app()[\Spatie\Permission\PermissionRegistrar::class]->forgetCachedPermissions();

        // create permissions
        Permission::create(['name' => 'create-roles']);
        Permission::create(['name' => 'edit-roles']);
        Permission::create(['name' => 'show-roles']);
        Permission::create(['name' => 'list-roles']);
        Permission::create(['name' => 'create-practitioners']);
        Permission::create(['name' => 'edit-practitioners']);
        Permission::create(['name' => 'delete-practitioners']);
        Permission::create(['name' => 'read-practitioners']);
        Permission::create(['name' => 'publish-practitioners']);
        Permission::create(['name' => 'unpublish-practitioners']);
        Permission::create(['name' => 'create-clinics']);
        Permission::create(['name' => 'edit-clinics']);
        Permission::create(['name' => 'show-clinics']);
        Permission::create(['name' => 'delete-clinics']);

        // create roles and assign created permissions

        // this can be done as separate statements
        $role = Role::create(['name' => 'practitioner']);
        $role->givePermissionTo('edit-practitioners');

        // or may be done by chaining
        $role = Role::create(['name' => 'clinic'])
            ->givePermissionTo(['edit-practitioners', 'publish-practitioners']);

        $role = Role::create(['name' => 'admin']);
        $role->givePermissionTo(Permission::all());
    }
}
