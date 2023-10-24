function InactiveUsersWithActiveRecordAssignToManager(table, field) {
	var inactiveUsers = new GlideRecord('sys_user');
	inactiveUsers.addQuery('active', false);
	inactiveUsers.addNotNullQuery('manager');
	inactiveUsers.query();
	while (inactiveUsers.next()) {
		var activeTasks = new GlideRecord(table);
		activeTasks.addQuery('active', true);
		activeTasks.addQuery(field, inactiveUsers.sys_id);
		activeTasks.setValue(field, inactiveUsers.manager);
		activeTasks.updateMultiple();
	}
}
// Adjust the Table and Field in the function call below to invoke after making it not a comment
//InactiveUsersWithActiveRecordAssignToManager('task', 'assigned_to');
