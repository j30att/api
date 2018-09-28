@extends('layouts.main')

@section('content')


    <div class="row" ng-controller="FilterBidResponsesController as FltrBdsRspnsCtrl">
        <div class="binds binds_full_sc">

            <div class="tabs-wr">
                <div class="active_status col-md-12">
                    Bids
                </div>
                <div class="tabs-wr__title col-md-12">
                    <div class="tabs_item"
                         ng-class="{'tabs_item__active':FltrBdsRspnsCtrl.filter === menuItem.status}"
                         ng-repeat="menuItem in FltrBdsRspnsCtrl.menu"
                         ng-bind="menuItem.name"
                         ng-click="FltrBdsRspnsCtrl.setFilter(menuItem.status)">
                    </div>

                </div>
                <div class="slider_container slider_container__full">
                    <div class="swipe-wr full_sc">
                        <bids class="bids_row__fullscreen" bids="FltrBdsRspnsCtrl.bids"></bids>
                    </div>
                </div>
            </div>



        </div>

    </div>
@endsection

