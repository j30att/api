
<div class="selected_event" ng-if="EvntsLstCtrl.showDetail({{$event->id}})">
    <img src="/images/select_event_bg.png" alt="">
</div>
<div class="selected_event_info event_item col-md-12">

    <div class="event_list-wr" ng-click="EvntsLstCtrl.openDetail({{$event->id}})">


        <div class="event-item__title">{{$event->title}}</div>
        <div class="event-item__summa">£{{$event->fund}} GTD</div>
        <div class="event-item__date">{{$event->formatted_data}}</div>
    </div>
    <a href="{{route('event', ['id'=>$event->id])}}">
        <div class="see_more"></div>
    </a>

</div>











