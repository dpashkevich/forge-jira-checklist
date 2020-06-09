import { useIssueProperty } from '@forge/ui-jira';

const ISSUE_PROPERTY_PREFIX = 'jira-checklist-';

export const useTasks = () => useIssueProperty(ISSUE_PROPERTY_PREFIX + 'tasks', []);
