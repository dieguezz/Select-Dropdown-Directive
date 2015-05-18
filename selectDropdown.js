'use strict';

/**
 * @ngdoc directive
 * @name bitbloqApp.directive:dropdown
 * @description
 * # dropdown
 */
angular.module('bitbloqApp')
    .directive('selectDropdown', function() {
        return {
            restrict: 'E',
            templateUrl: 'select-dropdown.html',
            scope: {
                options: '=',
                disabled: '=',
                optionsClick: '=',
		defaultOption: 'Select one...'
            },

            link: function(scope, element) {
                scope.collapsed = true;
                scope.triggerSelect = function() {
                    scope.collapsed = !scope.collapsed;
                };
                scope.selectOption = function(item) {
                    scope.selected = item;
                    scope.collapsed = true;
                    scope.optionsClick(item);
                };
                $(document).bind('click', function(event) {
                    var selectedDropdown = element
                        .find(event.target)
                        .length > 0;

                    if (selectedDropdown) {
                        return;
                    }

                    scope.$apply(function() {
                        scope.collapsed = true;
                    });
                });
            }
        };
    });
